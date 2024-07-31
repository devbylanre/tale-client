import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Flex from '../../components/Flex/Flex';
import Header from './components/Header';
import Box from '../../components/Box/Box';
import MediaListFeature from '../mediaList/Feature';
import MediaDetailFeature from '../mediaDetail/Feature';
import useMedia from '../../hooks/useMedia';

const MediasFeature = () => {
  const { media } = useMedia();

  return (
    <Section>
      <Container container={'full'}>
        <Box
          style={{
            width: media ? 'calc(100% - var(--details-panel))' : '100%',
            transition: 'width .3s ease-in-out',
          }}
        >
          <Header />
          <MediaListFeature
            p={'lg'}
            gap={'sm'}
            gridColumn={media ? '5' : '6'}
            style={{ transition: 'all .3 ease-in-out' }}
          />
        </Box>

        <Flex
          p={'lg'}
          height={'full'}
          borderLeft={'1'}
          position={'fixed'}
          borderColor={'gray-95'}
          flexDirection={'column'}
          backgroundColor={'white'}
          style={{
            top: '0rem',
            right: '0rem',
            width: 'var(--details-panel)',
            transform: `translateX(${media ? '0rem' : '32rem'})`,
            transition: 'transform .3s ease-in-out',
          }}
        >
          <MediaDetailFeature />
        </Flex>
      </Container>
    </Section>
  );
};

export default MediasFeature;
