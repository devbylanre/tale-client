import React from 'react';
import Text from '../../../components/Text/Text';
// import Icon from '../../../components/Icon/Icon';
// import { IoOptions } from 'react-icons/io5';
import Flex from '../../../components/Flex/Flex';

const Header = () => {
  return (
    <Flex
      mb={'xl'}
      mt={'2xl'}
      gapY={'lg'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      {/* <Icon
        size={56}
        color={'primary-40'}
        iconType={IoOptions}
      /> */}
      <Text
        as={'h2'}
        size={32}
        weight={500}
        align={'center'}
      >
        Update Media Information
      </Text>
    </Flex>
  );
};

export default Header;
