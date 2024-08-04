import React, { useRef, useState } from 'react';
import filer from '../../utils/file';
import useUser from '../../hooks/useUser';
import useMedia from '../../hooks/useMedia';
import { CREATE_MEDIAS } from '../../apis/mediaApi';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import Box from '../../components/Box/Box';
import Modal from '../../components/Modal/Modal';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
import Icon from '../../components/Icon/Icon';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Messenger from './components/Messenger';
import Field from '../../components/Field/Field';
import List from './components/List';
import File from '../../components/File/File';
import { useMutation } from '@tanstack/react-query';
import useFileReader from '../../hooks/useFileReader';

const validationSchema = Yup.object().shape({
  files: Yup.array()
    .of(
      Yup.mixed()
        .test(
          'fileSize',
          'File size is too big. Max file size is 5MB',
          (file) => file && (file as File).size <= 5 * 1024 * 1024
        )
        .test(
          'fileFormat',
          'File format is not supported',
          (file) =>
            file &&
            ['png', 'jpg', 'jpeg', 'gif'].includes(
              filer.ext((file as File).name)
            )
        )
    )
    .required('Select at least one file'),
});

type InitialValues = { files: File[] };
const initialValues: InitialValues = { files: [] };

const MediaUploadFeature = () => {
  const { user } = useUser();
  const { setMedia } = useMedia();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { percents, resetPercent } = useFileReader(selectedFiles);

  const { mutate, error, isPending } = useMutation({
    mutationFn: CREATE_MEDIAS,
    onSuccess: (data) => setMedia({ type: 'CREATE', payload: data.medias }),
  });

  const handleSubmit = async (
    { files }: InitialValues,
    { resetForm }: FormikHelpers<InitialValues>
  ) => {
    mutate({ userId: user ? user._id : '', files: files });
    resetForm();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(e.target.files || []));
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <Modal>
      <Modal.Action
        px={'md'}
        size={14}
        gap={'xs'}
        weight={500}
        height={'32'}
        borderRadius={'lg'}
        color={'primary-60'}
        backgroundColor={'inherit'}
        pseudos={{ hover: { backgroundColor: 'primary-95' } }}
      >
        <Icon
          size={20}
          style={{ strokeWidth: '1.5px' }}
          iconType={TbSquareRoundedPlusFilled}
        />
        Upload
      </Modal.Action>
      <Modal.Section>
        <Modal.Overlay />
        <Modal.Container>
          <Modal.Body>
            <Header error={error} />
            <Box
              maxHeight={'520'}
              overflowY={'scroll'}
            >
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue, errors }) => (
                  <Form>
                    <Box
                      mt={'xl'}
                      px={'lg'}
                    >
                      <Field name={'files'}>
                        <File
                          ref={inputRef}
                          multiple={true}
                          onChange={handleChange}
                        />
                      </Field>

                      <Messenger
                        onStorage={() => inputRef.current?.click()}
                        isDisabled={
                          values.files.length > 0 &&
                          percents.some((value) => value !== 100)
                        }
                      />
                    </Box>

                    <Box
                      px={'lg'}
                      spaceY={'md'}
                      mt={values.files.length === 0 ? 'none' : 'xl'}
                    >
                      {values.files.map((file, index) => (
                        <List
                          key={index}
                          file={file}
                          percent={percents[index]}
                          error={errors.files && errors.files[index]}
                          onRemove={() => {
                            const newFiles = values.files.filter(
                              (_, i) => i !== index
                            );
                            setFieldValue('files', newFiles);
                            resetPercent(index);
                          }}
                        />
                      ))}
                    </Box>

                    <Buttons
                      isSubmitting={isPending}
                      disabled={
                        errors.files !== undefined || values.files.length === 0
                      }
                    />
                  </Form>
                )}
              </Formik>
            </Box>
          </Modal.Body>
        </Modal.Container>
      </Modal.Section>
    </Modal>
  );
};

export default MediaUploadFeature;
