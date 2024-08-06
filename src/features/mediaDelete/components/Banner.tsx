import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Icon from '../../../components/Icon/Icon';
import { IoWarning } from 'react-icons/io5';
import Text from '../../../components/Text/Text';

const Banner = () => {
  return (
    <Flex
      px={'lg'}
      py={'sm'}
      alignItems={'center'}
      backgroundColor={'orange-95'}
    >
      <Icon
        size={20}
        color={'orange-40'}
        iconType={IoWarning}
      />
      <Text>You are about to delete the file</Text>
    </Flex>
  );
};

export default Banner;
