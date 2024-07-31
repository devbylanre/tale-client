import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import { IconType } from 'react-icons';
import Icon from '../../../components/Icon/Icon';

type InfoProps = {
  title: string;
  body?: string;
  iconType: IconType;
};

const Info = ({ title, body, iconType }: InfoProps) => {
  return (
    <Flex
      gapX={'sm'}
      alignItems={'center'}
      justifyContent={'between'}
    >
      <Icon
        size={'20'}
        color={'gray-40'}
        iconType={iconType}
        style={{ strokeWidth: '1.5px' }}
      />
      <Box flex={'full'}>
        <Text
          size={13}
          weight={500}
          transform={'capitalize'}
        >
          {title}
        </Text>
        <Text
          as={'p'}
          size={13}
          weight={500}
          color={'gray-50'}
        >
          {body ? body : 'Not available'}
        </Text>
      </Box>
    </Flex>
  );
};

export default Info;
