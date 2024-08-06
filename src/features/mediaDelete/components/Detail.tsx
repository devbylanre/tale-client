import React from 'react';
import Flex from '../../../components/Flex/Flex';
import useMedia from '../../../hooks/useMedia';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';

const Detail = () => {
  const { media } = useMedia();

  return (
    <Flex
      px={'lg'}
      mt={'xl'}
      flex={'full'}
      flexDirection={'column'}
    >
      <img
        loading={'lazy'}
        alt={media ? media.alt : ''}
        src={media ? media.uri : ''}
        style={{ aspectRatio: '1/1', objectFit: 'cover' }}
        className='w-5/12 mx-auto radius-xl'
      />
      <Box
        mx={'auto'}
        width={'9/12'}
      >
        <Text
          as={'h3'}
          weight={500}
          align={'center'}
          transform={'capitalize'}
        >
          {media ? media.name : ''}
        </Text>
      </Box>
    </Flex>
  );
};

export default Detail;
