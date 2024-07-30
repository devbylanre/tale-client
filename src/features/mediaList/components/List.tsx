import React, { useState } from 'react';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbDots } from 'react-icons/tb';
import useMedia from '../../../hooks/useMedia';
import filer from '../../../utils/file';

const List = () => {
  const { medias } = useMedia();
  const [selectedFile, setSelectedFile] = useState(-1);

  return (
    <React.Fragment>
      {medias.map((media, index) => (
        <Box
          key={media.hash}
          overflow={'hidden'}
          borderRadius={'xl'}
          position={'relative'}
          onMouseLeave={() => setSelectedFile(-1)}
          onMouseOut={() => setSelectedFile(index)}
          onMouseEnter={() => setSelectedFile(index)}
          onMouseOver={() => setSelectedFile(index)}
          backgroundColor={'gray-100'}
          style={{
            cursor: 'pointer',
            aspectRatio: '1/1',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${media.uri})`,
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
              backgroundImage:
                index === selectedFile
                  ? 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.4))'
                  : 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.35))',
            }}
          >
            <Flex
              alignItems={'center'}
              justifyContent={'between'}
            >
              <Text
                as={'h3'}
                weight={400}
                color={'white'}
                transform={'capitalize'}
              >
                {filer.normalName(media.name, 8)}
              </Text>

              <Button
                p={'xs'}
                width={'24'}
                height={'24'}
                borderRadius={'max'}
                backgroundColor={'gray-80'}
                pseudos={{ hover: { backgroundColor: 'gray-70' } }}
                style={{
                  opacity: index === selectedFile ? 1 : 0,
                }}
              >
                <Icon
                  size={'full'}
                  color={'white'}
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
    </React.Fragment>
  );
};

export default List;
