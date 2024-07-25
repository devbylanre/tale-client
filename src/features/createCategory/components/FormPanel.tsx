import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Field from '../../../components/Field/Field';
import TextField from '../../../components/TextField/TextField';
import Box from '../../../components/Box/Box';
import Button from '../../../components/Button/Button';

const initialValues = {
  image: '',
  title: '',
  description: '',
};

const validationSchema = Yup.object().shape({
  image: Yup.string().required('Select an image'),
  title: Yup.string().required('What is the category title'),
  description: Yup.string().required('What is the category description'),
});

const FormPanel = () => {
  const handleSubmit = (values: typeof initialValues) => {};

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <Box spaceY={'lg'}>
          <Field name={'title'}>
            <Field.Block>
              <Field.Label>Title</Field.Label>
              <Field.Segment>
                <TextField placeholder={'Category title e.g Fitness'} />
              </Field.Segment>
              <Field.Message />
            </Field.Block>
          </Field>
          <Field name={'description'}>
            <Field.Block>
              <Field.Label>Description</Field.Label>
              <Field.Segment>
                <TextField
                  placeholder={
                    'Write a short paragraph describing the category'
                  }
                />
              </Field.Segment>
              <Field.Message />
            </Field.Block>
          </Field>

          <Button
            width={'full'}
            type={'submit'}
          >
            Create category
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default FormPanel;
