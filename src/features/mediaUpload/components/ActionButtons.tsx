import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import { useField } from 'formik';
import { useMutationState } from '@tanstack/react-query';

const ActionButtons = () => {
  const [, { value: files, error: errors }] = useField<File[]>('files');
  const isDisabled = !!errors || files.length === 0;

  const status = useMutationState({
    filters: { mutationKey: ['createMedias'] },
    select: (mutation) => mutation.state.status,
  });

  const isPending = status[0] === 'pending';

  return (
    <Flex
      mt={'xl'}
      px={'lg'}
      py={'md'}
      borderTop={'1'}
      position={'sticky'}
      borderColor={'gray-95'}
      backgroundColor={'white'}
      justifyContent={'between'}
      style={{ bottom: 0 }}
    >
      <Modal.Action
        height={'32'}
        color={'white'}
        disabled={isPending}
        backgroundColor={'gray-60'}
        pseudos={{ hover: { backgroundColor: 'gray-70' } }}
      >
        Dismiss
      </Modal.Action>

      <Button
        height={'32'}
        type={'submit'}
        disabled={isPending || isDisabled}
      >
        {isPending ? 'Uploading...' : 'Upload'}
      </Button>
    </Flex>
  );
};

export default ActionButtons;
