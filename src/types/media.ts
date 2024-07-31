namespace Media {
  export type Type = {
    _id: string;
    alt: string;
    uri: string;
    name: string;
    size: number;
    hash: string;
    path: string;
    createdAt: Date;
  };

  export type Action =
    | { type: 'CREATE'; payload: Type }
    | { type: 'DELETE'; payload: Type }
    | { type: 'UPDATE'; payload: Type }
    | { type: 'READ_MULTIPLE'; payload: Type[] }
    | { type: 'READ_SINGLE'; payload: Type }
    | { type: 'CLEAR_SINGLE'; payload: null };

  export type State = {
    medias: Type[];
    media: Type | null;
  };

  export type Context = {
    state: State;
    dispatch: React.Dispatch<Action>;
  };
}

export default Media;
