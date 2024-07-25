import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Flex from '../../components/Flex/Flex';
import Header from './components/Header';
import Box from '../../components/Box/Box';
import ListMediaFeature from '../listMedia/Feature';
import MediaDetailFeature from '../mediaDetail/Feature';
import MediaUploadFeature from '../mediaUpload/Feature';

const MediasFeature = () => {
  return (
    <Section>
      <Container container={'full'}>
        <Flex>
          <Box style={{ width: 'calc(100% - var(--details-panel))' }}>
            <Header />
            <ListMediaFeature />
            <Box
              borderTop={'1'}
              borderColor={'gray-90'}
              mt={'5xl'}
            >
              <MediaUploadFeature />
            </Box>
          </Box>

          <Flex
            p={'lg'}
            height={'full'}
            borderLeft={'1'}
            position={'fixed'}
            borderColor={'gray-95'}
            flexDirection={'column'}
            // backgroundColor={'white'}
            style={{ right: '0rem', width: 'var(--details-panel)' }}
          >
            <MediaDetailFeature />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default MediasFeature;
