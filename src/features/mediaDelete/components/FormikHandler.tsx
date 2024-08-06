import React from 'react';
import { Form, Formik } from 'formik';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import useMedia from '../../../hooks/useMedia';
import { DELETE_MEDIA } from '../../../apis/mediaApi';
import { useMutation } from '@apollo/client';
import Media from '../../../types/media';
import Text from '../../../components/Text/Text';
import { useSearchParams } from 'react-router-dom';
import Box from '../../../components/Box/Box';
import Icon from '../../../components/Icon/Icon';
import { IoArrowForward, IoCloseCircle } from 'react-icons/io5';

const FormikHandler = () => {
  const [, setSearchParams] = useSearchParams();
  const { media, setMedia } = useMedia();
  const [deleteMedia, { loading, error }] = useMutation<{
    deleteMedia: Media.Type;
  }>(DELETE_MEDIA, {
    onCompleted: ({ deleteMedia }) => {
      setMedia({ type: 'DELETE', payload: deleteMedia });
      setSearchParams('');
    },
    onError: (error) => console.log({ error }),
  });

  const handleSubmit = async () => {
    await deleteMedia({ variables: { id: media ? media._id : '' } });
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={handleSubmit}
    >
      <Form>
        <Flex
          px={'md'}
          py={'sm'}
          mx={'lg'}
          borderRadius={'lg'}
          backgroundColor={'red-95'}
          style={{
            opacity: error ? 1 : 0,
            visibility: error ? 'visible' : 'hidden',
            transform: error ? 'translateY(0em)' : 'translateY(-.5em)',
            transition: 'opacity .2s ease-in, transform .2s ease-in',
          }}
        >
          <Text
            size={14}
            weight={500}
            color={'red-40'}
          >
            {error ? error.message : null}
          </Text>
        </Flex>

        <Box
          py={'lg'}
          px={'lg'}
          mt={'xl'}
          spaceY={'xs'}
        >
          <Button
            width={'full'}
            type={'submit'}
            disabled={loading}
          >
            {loading ? 'Deleting' : 'Yes! Delete'}
          </Button>
          <Button
            gap={'xs'}
            width={'full'}
            type={'button'}
            color={'primary-40'}
            backgroundColor={'inherit'}
            pseudos={{ hover: { color: 'primary-30' } }}
          >
            No
            <Icon
              size={16}
              iconType={IoCloseCircle}
            />
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default FormikHandler;
