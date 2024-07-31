import React from 'react';
import Text from '../../../components/Text/Text';
import Box from '../../../components/Box/Box';
import useMedia from '../../../hooks/useMedia';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbX } from 'react-icons/tb';
import Flex from '../../../components/Flex/Flex';
import { useSearchParams } from 'react-router-dom';

const Base = () => {
  const [_, setSearchParams] = useSearchParams();
  const { media, setMedia } = useMedia();

  const handleClear = () => {
    setSearchParams('');
    setMedia({ type: 'CLEAR_SINGLE', payload: null });
  };

  return (
    <React.Fragment>
      <Flex justifyContent={'center'}>
        <Button
          px={'md'}
          gap={'xs'}
          width={'fit'}
          height={'24'}
          borderRadius={'max'}
          onClick={handleClear}
          backgroundColor={'gray-70'}
          pseudos={{ hover: { backgroundColor: 'gray-80' } }}
        >
          <Icon
            size={20}
            iconType={TbX}
          />
        </Button>
      </Flex>

      <Box
        mt={'lg'}
        mx={'auto'}
        spaceY={'sm'}
        width={'full'}
      >
        <img
          className={'w-full radius-xl'}
          alt={media ? media.alt : ''}
          src={media ? media.uri : ''}
          style={{ objectFit: 'cover', aspectRatio: '1/1' }}
        />
        <Text
          as={'h3'}
          weight={400}
          align={'center'}
        >
          {media ? media.name : ''}
        </Text>
      </Box>
    </React.Fragment>
  );
};

export default Base;
