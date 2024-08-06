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
      backgroundColor={'gray-95'}
      style={{ zIndex: 1 }}
    >
      <Icon
        size={20}
        color={'blue-40'}
        iconType={IoFileTrayFull}
      />

      <Box flex={'full'}>
        <Text
          as={'h3'}
          weight={400}
        >
          Click on open to choose files
        </Text>
      </Box>

      <Button
        px={'none'}
        width={'fit'}
        height={'fit'}
        color={'gray-40'}
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
