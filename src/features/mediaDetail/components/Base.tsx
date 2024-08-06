import React from 'react';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import useMedia from '../../../hooks/useMedia';

const Base = () => {
  const { media } = useMedia();

  return (
    <Box
      mx={'auto'}
      spaceY={'md'}
      width={'full'}
    >
      <img
        alt={media ? media.alt : ''}
        src={media ? media.uri : ''}
        loading={'lazy'}
        style={{ objectFit: 'cover', aspectRatio: '1/1' }}
        className={'w-full radius-xl'}
      />
      <Text
        as={'h3'}
        size={18}
        weight={500}
        align={'center'}
        transform={'capitalize'}
      >
        {media ? media.name : ''}
      </Text>
    </Box>
  );
};

export default Base;
