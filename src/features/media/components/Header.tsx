import React from 'react';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbCloudUpload } from 'react-icons/tb';

const Header = () => {
  return (
    <Flex
      px={'lg'}
      height={'48'}
      borderBottom={'1'}
      position={'sticky'}
      alignItems={'center'}
      borderColor={'gray-95'}
      justifyContent={'between'}
      backgroundColor={'white'}
      style={{ top: '0rem', zIndex: 1 }}
    >
      <Text
        as={'p'}
        color={'gray-40'}
      >
        Manage your docs, videos, audios and more...
      </Text>

      <Button
        size={16}
        height={'32'}
        borderRadius={'max'}
      >
        <Icon
          size={20}
          iconType={TbCloudUpload}
        />
        Upload
      </Button>
    </Flex>
  );
};

export default Header;
