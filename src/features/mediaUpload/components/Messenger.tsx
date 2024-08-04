import React from 'react';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import { TbCloudFilled } from 'react-icons/tb';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';

type MessengerProps = {
  isDisabled: boolean;
  onStorage: () => void;
};

const Messenger = ({ isDisabled, onStorage }: MessengerProps) => {
  const handleStorage = () => onStorage();

  return (
    <Flex
      px={'lg'}
      gap={'lg'}
      height={'240'}
      borderRadius={'2xl'}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}
      backgroundColor={'primary-95'}
    >
      <Icon
        size={48}
        color={'primary-50'}
        iconType={TbCloudFilled}
      />

      <Box
        mx={'auto'}
        width={'8/12'}
      >
        <Text
          as={'p'}
          size={24}
          weight={500}
          align={'center'}
        >
          Choose files from your local storage
        </Text>
      </Box>

      <Button
        size={14}
        weight={500}
        height={'32'}
        type={'button'}
        color={'primary-60'}
        disabled={isDisabled}
        onClick={handleStorage}
        backgroundColor={'inherit'}
        pseudos={{ hover: { backgroundColor: 'primary-90' } }}
      >
        Open
      </Button>
    </Flex>
  );
};

export default Messenger;
