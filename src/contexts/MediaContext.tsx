import React, { createContext, useReducer } from 'react';
import Media from '../types/media';

const initialState: Media.State = {
  medias: [],
  media: null,
};

const reducer = (
  state: Media.State = initialState,
  action: Media.Action
): Media.State => {
  switch (action.type) {
    case 'CREATE':
      return {
        medias: [...state.medias, ...action.payload],
        media: state.media,
      };
    case 'UPDATE':
      return {
        medias: state.medias.map((media) =>
          media._id === action.payload._id
            ? { ...media, ...action.payload }
            : media
        ),
        media: state.media
          ? state.media._id === action.payload._id
            ? action.payload
            : state.media
          : null,
      };
    case 'DELETE':
      return {
        medias: state.medias.filter(
          (media) => media._id !== action.payload._id
        ),
        media: state.media
          ? state.media._id === action.payload._id
            ? null
            : state.media
          : null,
      };
    case 'READ_MULTIPLE':
      return { medias: [...action.payload], media: state.media };
    case 'READ_SINGLE':
      return { medias: [...state.medias], media: action.payload };
    case 'CLEAR_SINGLE':
      return { medias: [...state.medias], media: null };
  }
};

export const MediaContext = createContext<Media.Context | null>(null);

const MediaProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MediaContext.Provider value={{ state, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
