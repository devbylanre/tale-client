import React from 'react';
import Box from '../../../components/Box/Box';
import Text from '../../../components/Text/Text';
import useMedia from '../../../hooks/useMedia';
import Info from './Info';

const Information = () => {
  const { media } = useMedia();

  return (
    <Box
      mt={'3xl'}
      flex={'full'}
    >
      <Text
        as={'h3'}
        weight={400}
      >
        Details
      </Text>
      <Box
        mt={'md'}
        spaceY={'sm'}
      >
        {media ? (
          <React.Fragment>
            <Info
              title='Date added'
              body={new Date(media.createdAt).toLocaleString('default', {
                month: 'short',
                day: '2-digit',
                year: '2-digit',
              })}
            />
            <Info
              title='Size'
              body={`${String((media.size / 1024 ** 2).toFixed(2))} MB`}
            />
            <Info
              title='Alt text'
              body={media.alt ? media.alt : undefined}
            />
          </React.Fragment>
        ) : null}
      </Box>
    </Box>
  );
};

export default Information;
