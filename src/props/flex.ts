import Variants from '../types/variants';

const flex = {
  basis: {
    class: 'basis',
    responsive: true,
    values: [
      'full',
      '1/12',
      '2/12',
      '3/12',
      '4/12',
      '5/12',
      '6/12',
      '7/12',
      '8/12',
      '9/12',
      '10/12',
      '11/12',
    ] as const,
  },

  direction: {
    class: 'flex',
    responsive: true,
    values: ['column', 'row', 'row-alt', 'column-alt'] as const,
  },

  wrap: {
    class: 'flex',
    responsive: true,
    values: ['wrap', 'no-wrap', 'wrap-alt'] as const,
  },

  flex: {
    class: 'flex',
    responsive: true,
    values: ['none', 'full', 'auto', 'initial'],
  },
} satisfies Variants.Map;

export default flex;
