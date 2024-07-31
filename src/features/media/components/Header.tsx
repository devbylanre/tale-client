import React from 'react';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbPlus } from 'react-icons/tb';

const Header = () => {
  return (
    <Flex
      px={'lg'}
      borderBottom={'1'}
      position={'sticky'}
      alignItems={'center'}
      borderColor={'gray-95'}
      justifyContent={'between'}
      backgroundColor={'white'}
      style={{ top: '0rem', zIndex: 1, height: 'var(--header-panel)' }}
    >
      <Text
        as={'p'}
        color={'gray-40'}
      >
        Manage your docs, videos, audios and more...
      </Text>

      <Button
        px={'md'}
        size={14}
        gap={'xs'}
        weight={500}
        height={'32'}
        borderRadius={'lg'}
      >
        <Icon
          size={20}
          iconType={TbPlus}
          style={{ strokeWidth: '2.5px' }}
        />
        Upload
      </Button>
    </Flex>
  );
};

export default Header;
