import React, { useEffect } from 'react';
import Base from './components/Base';
import Information from './components/Information';
import Actions from './components/Actions';
import { useLazyQuery } from '@apollo/client';
import { GET_SINGLE_MEDIA } from '../../apis/mediaApi';
import { useLocation, useSearchParams } from 'react-router-dom';
import Media from '../../types/media';
import useMedia from '../../hooks/useMedia';

const MediaDetailFeature = () => {
  const { setMedia } = useMedia();
  const [searchParams] = useSearchParams();
  const ID = searchParams.get('mediaId');
  const [getMedia, { loading, error }] = useLazyQuery<{
    media: Media.Type;
  }>(GET_SINGLE_MEDIA, {
    variables: { id: ID },
    onCompleted: ({ media }) => {
      setMedia({ type: 'READ_SINGLE', payload: media });
    },
  });

  useEffect(() => {
    if (ID !== null) {
      getMedia();
    }
  }, [ID, getMedia]);

  switch (true) {
    case loading:
      return null;
    case error !== undefined:
      return null;
    default:
      return (
        <React.Fragment>
          <Base />
          <Information />
          <Actions />
        </React.Fragment>
      );
  }
};

export default MediaDetailFeature;
