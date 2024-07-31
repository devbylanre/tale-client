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
      <Flex
        alignItems={'center'}
        justifyContent={'between'}
      >
        <Flex
          p={'xs'}
          gapX={'xs'}
          borderRadius={'max'}
          alignItems={'center'}
          backgroundColor={'gray-95'}
        >
          {Array.from(['about', 'update', 'delete']).map((action) => (
            <Button
              px={'md'}
              py={'sm'}
              size={13}
              gap={'xs'}
              key={action}
              weight={500}
              width={'fit'}
              height={'fit'}
              borderRadius={'max'}
              transform={'capitalize'}
              color={action === 'about' ? 'white' : 'gray-50'}
              backgroundColor={action === 'about' ? 'gray-60' : 'inherit'}
              pseudos={{
                hover: {
                  backgroundColor: action === 'about' ? 'gray-70' : 'gray-90',
                },
              }}
            >
              {action}
            </Button>
          ))}
        </Flex>

        <Button
          gap={'xs'}
          px={'none'}
          width={'32'}
          height={'32'}
          color={'gray-60'}
          borderRadius={'max'}
          onClick={handleClear}
          backgroundColor={'gray-95'}
          pseudos={{ hover: { backgroundColor: 'gray-90' } }}
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
          weight={500}
          transform={'capitalize'}
        >
          {media ? media.name : ''}
        </Text>
      </Box>
    </React.Fragment>
  );
};

export default Base;
