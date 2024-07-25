import React from 'react';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';

const Base = () => {
  return (
    <Box
      mx={'auto'}
      spaceY={'sm'}
      width={'full'}
    >
      <img
        alt={'dummy'}
        className={'w-full radius-xl'}
        src={'/assets/images/dummy.jpg'}
        style={{ objectFit: 'cover', aspectRatio: '1/1' }}
      />
      <Text
        as={'h3'}
        weight={400}
        align={'center'}
      >
        Nature shot - Alabama United States
      </Text>
    </Box>
  );
};

export default Base;
