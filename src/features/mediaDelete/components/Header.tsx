import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import { IoTrash } from 'react-icons/io5';
import Text from '../../../components/Text/Text';

const Header = () => {
  return (
    <Flex
      px={'lg'}
      mt={'3xl'}
      gap={'2xl'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Icon
        size={48}
        color={'red-40'}
        iconType={IoTrash}
      />
      <Text
        as={'h2'}
        size={32}
        weight={500}
        align={'center'}
      >
        Are you sure you want to delete this file?
      </Text>
    </Flex>
  );
};

export default Header;
