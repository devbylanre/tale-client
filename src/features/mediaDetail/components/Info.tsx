import React from 'react';
import Flex from '../../../components/Flex/Flex';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';

type InfoProps = {
  title: string;
  body?: string;
};

const Info = ({ title, body }: InfoProps) => {
  return (
    <Flex
      gapX={'xl'}
      justifyContent={'between'}
    >
      <Box flexBasis={'5/12'}>
        <Text
          size={14}
          weight={500}
          transform={'capitalize'}
        >
          {title}
        </Text>
      </Box>
      <Text
        as={'p'}
        size={14}
        weight={500}
        align={'right'}
        color={'gray-60'}
      >
        {body ? body : 'Not available'}
      </Text>
    </Flex>
  );
};

export default Info;
