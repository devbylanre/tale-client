import React, { useEffect } from 'react';
import Base from './components/Base';
import Information from './components/Information';
import Actions from './components/Actions';
import { useLazyQuery } from '@apollo/client';
import { GET_SINGLE_MEDIA } from '../../apis/mediaApi';
import { useSearchParams } from 'react-router-dom';
import Media from '../../types/media';
import useMedia from '../../hooks/useMedia';

const MediaDetailFeature = () => {
  const { setMedia } = useMedia();
  const [searchParams] = useSearchParams();
  const ID = searchParams.get('mediaId');

  const [getMedia] = useLazyQuery<{
    media: Media.Type;
  }>(GET_SINGLE_MEDIA, {
    variables: { id: ID },
    onCompleted: ({ media }) => {
      setMedia({ type: 'READ_SINGLE', payload: media });
    },
  });

  useEffect(() => {
    if (ID === null) return;
    getMedia();

    return () => {};
  }, [ID, getMedia]);

  return (
    <React.Fragment>
      <Base />
      <Actions />
      <Information />
    </React.Fragment>
  );
};

export default MediaDetailFeature;
