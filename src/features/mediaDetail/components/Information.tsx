import React from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import Flex from '../../../components/Flex/Flex';

const Information = () => {
  return (
    <Box
      mt={'3xl'}
      flex={'full'}
    >
      <Text
        as={'h3'}
        weight={400}
      >
        Details
      </Text>
      <Box
        mt={'md'}
        spaceY={'sm'}
      >
        {Array.from('abcd').map((char) => (
          <Flex
            key={char}
            justifyContent={'between'}
          >
            <Text
              size={14}
              weight={500}
            >
              File type
            </Text>
            <Text
              size={14}
              weight={500}
            >
              .JPG
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Information;
