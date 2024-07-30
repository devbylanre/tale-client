import React, { ComponentProps } from 'react';
import List from './components/List';
import { useQuery } from '@apollo/client';
import { GET_MULTIPLE_MEDIA } from '../../apis/mediaApi';
import Media from '../../types/media';
import useMedia from '../../hooks/useMedia';
import Loader from '../../components/Loader/Loader';
import Flex from '../../components/Flex/Flex';
import Text from '../../components/Text/Text';
import Icon from '../../components/Icon/Icon';
import { TbWifi2 } from 'react-icons/tb';
import Container from '../../components/Container/Container';
import Box from '../../components/Box/Box';
import Grid from '../../components/Grid/Grid';

type ListMediaFeatureProps = ComponentProps<typeof Grid>;

const ListMediaFeature = (props: ListMediaFeatureProps) => {
  const { setMedia } = useMedia();
  const { loading, error } = useQuery<{ medias: Media.State['medias'] }>(
    GET_MULTIPLE_MEDIA,
    {
      onCompleted: ({ medias }) => {
        setMedia({ type: 'READ_MULTIPLE', payload: medias });
      },
    }
  );

  console.log({ error });

  switch (true) {
    case loading:
      return (
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          style={{ height: 'calc(100vh - var(--header-panel))' }}
        >
          <Loader>
            <Loader.Parent>
              <Loader.Child />
            </Loader.Parent>
          </Loader>
        </Flex>
      );
    case error !== undefined:
      return (
        <Container>
          <Flex
            gapY={'md'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
            style={{ height: 'calc(100vh - var(--header-panel))' }}
          >
            <Icon
              size={48}
              color={'red-60'}
              iconType={TbWifi2}
              style={{ strokeWidth: '1.5px' }}
            />
            <Box spaceY={'xs'}>
              <Text
                as={'h2'}
                size={18}
                weight={500}
                align={'center'}
              >
                {error ? error.name : null}
              </Text>
              <Text
                as={'p'}
                align={'center'}
              >
                {error ? error.message : null}
              </Text>
            </Box>
          </Flex>
        </Container>
      );
    default:
      return (
        <Grid {...props}>
          <List />
        </Grid>
      );
  }
};

export default ListMediaFeature;
