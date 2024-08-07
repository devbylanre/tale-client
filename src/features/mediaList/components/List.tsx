import React, { useState } from 'react';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Icon from '../../../components/Icon/Icon';
import useMedia from '../../../hooks/useMedia';
import { IoEnter } from 'react-icons/io5';
import Button from '../../../components/Button/Button';
import filer from '../../../utils/file';
import { useSearchParams } from 'react-router-dom';

const List = () => {
  const { medias } = useMedia();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFile, setSelectedFile] = useState(0);

  const mediaID = searchParams.get('mediaId');

  const handleClick = (id: string) => {
    setSearchParams(`mediaId=${id}`);
  };

  return (
    <React.Fragment>
      {medias.map((media, index) => {
        const isHovered = index + 1 === selectedFile;

        return (
          <Box
            key={media.hash}
            overflow={'hidden'}
            borderRadius={'xl'}
            position={'relative'}
            backgroundColor={'gray-100'}
            onMouseOut={() => setSelectedFile(0)}
            onMouseLeave={() => setSelectedFile(0)}
            onMouseOver={() => setSelectedFile(index + 1)}
            onMouseEnter={() => setSelectedFile(index + 1)}
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
              height={isHovered ? 'full' : '40'}
              style={{
                bottom: '0rem',
                transition: 'all .15s ease-in-out',
                backgroundImage: isHovered
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
                  p={'none'}
                  width={'24'}
                  height={'24'}
                  color={'gray-40'}
                  borderRadius={'max'}
                  backgroundColor={'white'}
                  disabled={mediaID !== null}
                  opacity={isHovered ? '100' : '0'}
                  onClick={() => handleClick(media._id)}
                  pseudos={{ hover: { backgroundColor: 'gray-95' } }}
                  style={{
                    transform: isHovered ? 'scale(1)' : 'scale(0)',
                  }}
                >
                  <Icon
                    size={16}
                    iconType={IoEnter}
                  />
                </Button>
              </Flex>

              <Flex
                gapX={'sm'}
                alignItems={'center'}
                style={{
                  transform: `translateY(${isHovered ? '0rem' : '5rem'})`,
                  transition: 'transform .15s ease-in-out',
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
        );
      })}
    </React.Fragment>
  );
};

export default List;
