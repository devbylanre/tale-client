import React, { useState } from 'react';
import Box from '../../../components/Box/Box';
import Flex from '../../../components/Flex/Flex';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import { TbDots } from 'react-icons/tb';
import useMedia from '../../../hooks/useMedia';
import filer from '../../../utils/file';
import { useSearchParams } from 'react-router-dom';

const List = () => {
  const { medias } = useMedia();
  const [_, setSearchParams] = useSearchParams();
  const [selectedFile, setSelectedFile] = useState(0);

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
                transition: 'all 0.3s ease-in-out',
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
                  p={'xs'}
                  width={'24'}
                  height={'24'}
                  borderRadius={'max'}
                  backgroundColor={'gray-80'}
                  onClick={() => setSearchParams(`mediaId=${media._id}`)}
                  pseudos={{ hover: { backgroundColor: 'gray-70' } }}
                  style={{ opacity: isHovered ? 1 : 0 }}
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
                  transform: `translateY(${isHovered ? '0rem' : '5rem'})`,
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
