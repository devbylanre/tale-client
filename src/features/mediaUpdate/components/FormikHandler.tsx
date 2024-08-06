import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Field from '../../../components/Field/Field';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';
import useMedia from '../../../hooks/useMedia';
import { useMutation } from '@apollo/client';
import { UPDATE_MEDIA } from '../../../apis/mediaApi';
import Media from '../../../types/media';
import Text from '../../../components/Text/Text';

const validationSchema = Yup.object().shape({
  alt: Yup.string()
    .max(100, 'Alt text cannot exceed 100 characters')
    .required('Alt text is required'),
  name: Yup.string()
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
});

type InitialValues = { alt: string; name: string };

const FormikHandler = () => {
  const { media, setMedia } = useMedia();

  const initialValues: InitialValues = {
    alt: media ? media.alt : '',
    name: media ? media.name : '',
  };

  const [updateMedia, { loading, error }] = useMutation<{
    updateMedia: Media.Type;
  }>(UPDATE_MEDIA, {
    onCompleted: ({ updateMedia }) => {
      setMedia({ type: 'UPDATE', payload: updateMedia });
    },
    onError: (error) => console.log({ error }),
  });

  const handleSubmit = async (values: InitialValues) => {
    await updateMedia({
      variables: {
        id: media ? media._id : '',
        payload: { name: values.name, alt: values.alt },
      },
    });
  };

  return (
    <React.Fragment>
      {media ? (
        <Formik
          onSubmit={handleSubmit}
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            <Box spaceY={'lg'}>
              <Field name={'name'}>
                <Field.Block>
                  <Field.Segment>
                    <TextField
                      placeholder={'Media name e.g T. Donald portrait'}
                    />
                  </Field.Segment>
                  <Field.Message />
                </Field.Block>
              </Field>
              <Field name={'alt'}>
                <Field.Block>
                  <Field.Segment>
                    <TextField placeholder={'Media alternative text'} />
                  </Field.Segment>
                  <Field.Message>
                    This is displayed if image is not found
                  </Field.Message>
                </Field.Block>
              </Field>

              <Button
                width={'full'}
                type={'submit'}
                disabled={loading}
              >
                {loading ? 'Updating' : 'Update media'}
              </Button>

              <Box
                px={'md'}
                py={'sm'}
                borderRadius={'lg'}
                backgroundColor={'red-40'}
                style={{
                  opacity: error ? 1 : 0,
                  visibility: error ? 'visible' : 'hidden',
                  transition: 'opacity .3s ease-in, transform .3s ease-in',
                  transform: error ? 'translateY(0em)' : 'translateY(.5em)',
                }}
              >
                <Text
                  size={14}
                  weight={500}
                  color={'white'}
                >
                  {error ? error.message : null}
                </Text>
              </Box>
            </Box>
          </Form>
        </Formik>
      ) : null}
    </React.Fragment>
  );
};

export default FormikHandler;
