import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import { IconType } from 'react-icons';
import Icon from '../../../components/Icon/Icon';

type InfoProps = {
  data: string;
  iconType: IconType;
};

const Info = ({ data, iconType }: InfoProps) => {
  return (
    <Flex
      width={'full'}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'between'}
    >
      <Icon
        size={'20'}
        color={'gray-60'}
        iconType={iconType}
        style={{ strokeWidth: '1.5px' }}
      />

      <Text
        as={'p'}
        size={13}
        weight={500}
        align={'center'}
      >
        {data}
      </Text>
    </Flex>
  );
};

export default Info;
