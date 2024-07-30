import React, { createContext, useReducer } from 'react';
import Media from '../types/media';

const reducer = (state: Media.State, action: Media.Action): Media.State => {
  switch (action.type) {
    case 'CREATE':
      return { medias: [...state.medias, action.payload] };
    case 'UPDATE':
      return {
        medias: state.medias.map((media) =>
          media._id === action.payload._id ? action.payload : media
        ),
      };
    case 'DELETE':
      return {
        medias: state.medias.filter(
          (media) => media._id !== action.payload._id
        ),
      };
    case 'READ_MULTIPLE':
      return {
        medias: [...action.payload],
      };
    case 'READ_SINGLE':
      return { medias: [action.payload] };
  }
};

const initialState: Media.State = {
  medias: [],
};

const MediaContext = createContext<Media.Context | null>(null);

const MediaProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MediaContext.Provider value={{ state, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
