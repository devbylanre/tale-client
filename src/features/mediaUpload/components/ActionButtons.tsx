import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import { useField } from 'formik';
import { useMutationState } from '@tanstack/react-query';
import Icon from '../../../components/Icon/Icon';
import { IoArrowUndoCircleOutline } from 'react-icons/io5';

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
        gap={'xs'}
        height={'32'}
        color={'primary-40'}
        disabled={isPending}
        backgroundColor={'inherit'}
        pseudos={{ hover: { color: 'primary-30' } }}
      >
        Cancel
        <Icon iconType={IoArrowUndoCircleOutline} />
      </Modal.Action>

      <Button
        height={'32'}
        type={'submit'}
        disabled={isPending || isDisabled}
      >
        {isPending ? 'Uploading...' : 'Submit'}
      </Button>
    </Flex>
  );
};

export default ActionButtons;
