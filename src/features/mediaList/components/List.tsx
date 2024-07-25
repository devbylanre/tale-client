import React, { useState } from 'react';
import Grid from '../../../components/Grid/Grid';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbDots } from 'react-icons/tb';

const List = () => {
  const [selectedFile, setSelectedFile] = useState(-1);

  return (
    <Grid
      p={'lg'}
      gap={'lg'}
      gridColumn={'4'}
    >
      {Array.from('abcdefghi').map((char, index) => (
        <Box
          key={char}
          overflow={'hidden'}
          borderRadius={'xl'}
          position={'relative'}
          onMouseOver={() => setSelectedFile(index)}
          onMouseLeave={() => setSelectedFile(-1)}
          backgroundColor={'gray-100'}
          style={{
            cursor: 'pointer',
            aspectRatio: '1/1',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url("/assets/images/dummy.jpg")',
          }}
        >
          <Flex
            px={'md'}
            py={'sm'}
            gap={'lg'}
            width={'full'}
            position={'absolute'}
            flexDirection={'column'}
            justifyContent={'between'}
            height={index === selectedFile ? 'full' : '40'}
            style={{
              bottom: '0rem',
              transition: 'all 0.3s ease-in-out',
              background:
                'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
            }}
          >
            <Flex
              alignItems={'center'}
              justifyContent={'between'}
            >
              <Text
                as={'h3'}
                size={14}
                weight={400}
                color={'white'}
              >
                Nature
              </Text>

              <Button
                p={'xs'}
                width={'24'}
                height={'24'}
                borderRadius={'max'}
                backgroundColor={'gray-95'}
                pseudos={{ hover: { backgroundColor: 'gray-90' } }}
                style={{
                  opacity: index === selectedFile ? 1 : 0,
                }}
              >
                <Icon
                  size={'full'}
                  color={'gray-40'}
                  iconType={TbDots}
                />
              </Button>
            </Flex>

            <Flex
              gapX={'sm'}
              alignItems={'center'}
              style={{
                transition: 'all 0.3s ease-in-out',
                transform: `translateY(${
                  index === selectedFile ? '0rem' : '5rem'
                })`,
              }}
            >
              <img
                alt={'user dummy'}
                className={'size-32 radius-max'}
                src={'/assets/images/user-dummy.jpg'}
              />
              <Text
                size={13}
                color={'white'}
              >
                Uploaded by Mia
              </Text>
            </Flex>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};

export default List;
