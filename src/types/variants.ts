type Pseudos = 'hover' | 'active' | 'focus' | 'placeholder';
type Breakpoints = 'initial' | 'sm' | 'md' | 'lg' | 'xl';

namespace Variants {
  export type Config = {
    class: string;
    pseudos?: Pseudos[];
    values: readonly (string | number)[];
    responsive?: boolean;
  };

  export type Map = { [key: string]: Config };

  export type Values<T extends Map> = {
    [K in keyof T]?: T[K]['responsive'] extends true
      ?
          | T[K]['values'][number]
          | { [key in Breakpoints]?: T[K]['values'][number] }
      : T[K]['values'][number];
  };

  export type PseudosValues<T extends Map> = {
    [key in Pseudos]?: {
      [K in keyof T]?: T[K]['pseudos'] extends Array<Pseudos>
        ? T[K]['responsive'] extends true
          ?
              | T[K]['values'][number]
              | { [key in Breakpoints]?: T[K]['values'][number] }
          : T[K]['values'][number]
        : never;
    };
  };

  export type Props<T extends (...args: any) => any> = Parameters<T>[0];
}

export default Variants;
