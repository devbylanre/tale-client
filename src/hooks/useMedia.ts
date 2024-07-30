import { useContext } from 'react';
import { MediaContext } from '../contexts/MediaContext';

const useMedia = () => {
  const context = useContext(MediaContext);

  if (context === null) {
    throw new Error('useMedia must be used within a MediaProvider');
  }

  return {
    medias: context.state.medias,
    media: context.state.media,
    setMedia: context.dispatch,
  };
};

export default useMedia;
