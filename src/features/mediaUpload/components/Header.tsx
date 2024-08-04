import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import {
  TbAlertTriangleFilled,
  TbTableFilled,
  TbVersionsFilled,
} from 'react-icons/tb';

type HeaderProps = { error: Error | null };

const Header = ({ error }: HeaderProps) => {
  return (
    <Flex
      px={'lg'}
      py={'md'}
      gapX={'sm'}
      alignItems={'center'}
      justifyContent={'between'}
      backgroundColor={error ? 'red-95' : 'gray-100'}
      style={{ transition: 'background-color .3s ease-in-out' }}
    >
      <Icon
        size={20}
        color={error ? 'red-60' : 'primary-60'}
        iconType={error ? TbAlertTriangleFilled : TbTableFilled}
      />

      <Box flex={'full'}>
        <Text
          as={'h3'}
          weight={400}
          color={error ? 'red-40' : 'gray-40'}
        >
          {error ? error.message : 'Store files in your library'}
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
        style={{
          opacity: error ? 0 : 1,
          transform: error ? 'translateX(-.75em)' : 'translateX(0em)',
        }}
      >
        <Icon
          size={20}
          iconType={TbVersionsFilled}
        />
      </Button>
    </Flex>
  );
};

export default Header;
