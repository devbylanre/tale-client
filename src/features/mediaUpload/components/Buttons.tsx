import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';

type ButtonsProps = {
  isSubmitting: boolean;
  disabled: boolean;
};

const Buttons = ({ isSubmitting, disabled }: ButtonsProps) => {
  return (
    <Flex
      mt={'xl'}
      p={'lg'}
      borderTop={'1'}
      position={'sticky'}
      borderColor={'gray-95'}
      backgroundColor={'white'}
      justifyContent={'between'}
      style={{ bottom: 0 }}
    >
      <Modal.Action
        size={14}
        color={'white'}
        borderRadius={'max'}
        disabled={isSubmitting}
        backgroundColor={'gray-70'}
        pseudos={{ hover: { backgroundColor: 'gray-60' } }}
      >
        Dismiss
      </Modal.Action>

      <Button
        size={14}
        type={'submit'}
        borderRadius={'max'}
        disabled={disabled || isSubmitting}
      >
        {isSubmitting ? 'Uploading' : 'Upload files'}
      </Button>
    </Flex>
  );
};

export default Buttons;
