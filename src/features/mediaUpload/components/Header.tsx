import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import { IoFileTrayFull, IoMicSharp } from 'react-icons/io5';

const Header = () => {
  return (
    <Flex
      px={'lg'}
      py={'md'}
      gapX={'sm'}
      alignItems={'center'}
      justifyContent={'between'}
      backgroundColor={'gray-100'}
      style={{ zIndex: 1 }}
    >
      <Icon
        size={20}
        color={'primary-60'}
        iconType={IoFileTrayFull}
      />

      <Box flex={'full'}>
        <Text
          as={'h3'}
          weight={400}
          color={'gray-40'}
        >
          Upload files from your device
        </Text>
      </Box>

      <Button
        px={'none'}
        width={'fit'}
        height={'fit'}
        color={'gray-60'}
        borderRadius={'max'}
        backgroundColor={'inherit'}
        pseudos={{ hover: { color: 'gray-10' } }}
      >
        <Icon
          size={20}
          iconType={IoMicSharp}
        />
      </Button>
    </Flex>
  );
};

export default Header;
