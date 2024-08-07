import React, { useEffect } from 'react';
import Header from './components/Header';
import { useSearchParams } from 'react-router-dom';
import useMedia from '../../hooks/useMedia';
import { useLazyQuery } from '@apollo/client';
import Media from '../../types/media';
import { GET_SINGLE_MEDIA } from '../../apis/mediaApi';

const MediaPanelFeature = () => {
  const { setMedia } = useMedia();
  const [searchParams] = useSearchParams();
  const mediaID = searchParams.get('mediaId');

  const [getMedia] = useLazyQuery<{
    media: Media.Type;
  }>(GET_SINGLE_MEDIA, {
    onCompleted: ({ media }) => {
      setMedia({ type: 'READ_SINGLE', payload: media });
    },
  });

  useEffect(() => {
    if (mediaID) {
      getMedia({
        variables: { id: mediaID },
      });
    }
  }, [mediaID, getMedia]);

  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};

export default MediaPanelFeature;
