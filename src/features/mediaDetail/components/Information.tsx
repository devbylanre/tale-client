import React from 'react';
import Text from '../../../components/Text/Text';
import useMedia from '../../../hooks/useMedia';
import Info from './Info';
import { IoTime, IoRadioButtonOnSharp, IoFileTrayFull } from 'react-icons/io5';
import Flex from '../../../components/Flex/Flex';

const Information = () => {
  const { media } = useMedia();

  return (
    <Flex
      mt={'3xl'}
      flex={'full'}
      justifyContent={'end'}
      flexDirection={'column'}
    >
      <Text
        as={'h3'}
        weight={400}
        align={'center'}
      >
        More details
      </Text>
      <Flex
        mt={'md'}
        justifyContent={'between'}
      >
        {media ? (
          <React.Fragment>
            <Info
              iconType={IoTime}
              data={new Date(media.createdAt).toLocaleString('default', {
                month: 'short',
                day: '2-digit',
                year: '2-digit',
              })}
            />
            <Info
              iconType={IoRadioButtonOnSharp}
              data={`${String((media.size / 1024 ** 2).toFixed(2))} MB`}
            />
            <Info
              iconType={IoFileTrayFull}
              data={media.alt ? media.alt : 'Image'}
            />
          </React.Fragment>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Information;
