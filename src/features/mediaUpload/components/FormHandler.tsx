import React from 'react';
import List from './List';
import * as Yup from 'yup';
import filer from '../../../utils/file';
import FileHandler from './FileHandler';
import ActionButtons from './ActionButtons';
import Box from '../../../components/Box/Box';
import useMedia from '../../../hooks/useMedia';
import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { CREATE_MEDIAS } from '../../../apis/mediaApi';
import useModal from '../../../hooks/useModal';
import Error from './Error';

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

const FormHandler = () => {
  const { setMedia } = useMedia();
  const { setIsVisible } = useModal();

  const { mutate } = useMutation({
    gcTime: 0,
    mutationKey: ['createMedias'],
    mutationFn: CREATE_MEDIAS,
    onSuccess: (data) => {
      setMedia({ type: 'CREATE', payload: data.medias });
      setIsVisible(false);
    },
  });

  const handleSubmit = async ({ files }: InitialValues) => {
    mutate({ files: files });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form>
          <Error />
          <FileHandler />
          <Box
            px={'lg'}
            mt={'lg'}
            spaceY={'sm'}
          >
            {values.files.map((_, index) => (
              <List
                key={index}
                index={index}
              />
            ))}
          </Box>
          <ActionButtons />
        </Form>
      )}
    </Formik>
  );
};

export default FormHandler;
