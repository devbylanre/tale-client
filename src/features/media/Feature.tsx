import React from 'react';
import Header from './components/Header';
import Box from '../../components/Box/Box';
import Flex from '../../components/Flex/Flex';
import { useSearchParams } from 'react-router-dom';
import MediaListFeature from '../mediaList/Feature';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import MediaPanelFeature from '../mediaPanel/Feature';

const MediasFeature = () => {
  const [searchParams] = useSearchParams();
  const ID = searchParams.get('mediaId');

  return (
    <Section>
      <Container container={'full'}>
        <Box
          style={{
            width: ID ? 'calc(100% - var(--details-panel))' : '100%',
            transition: 'width .15s ease-in-out',
          }}
        >
          <Header />
          <MediaListFeature
            p={'lg'}
            gap={'sm'}
            gridColumn={ID ? '5' : '6'}
            style={{ transition: 'all .15s ease-in-out' }}
          />
        </Box>

        <Flex
          gap={'none'}
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
            transition: 'transform .15s ease-in-out',
            transform: `translateX(${ID ? '0rem' : 'var(--details-panel)'})`,
          }}
        >
          <MediaPanelFeature />
        </Flex>
      </Container>
    </Section>
  );
};

export default MediasFeature;
