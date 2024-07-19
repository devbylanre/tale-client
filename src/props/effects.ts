import Variants from '../types/variants';

const effects = {
  opacity: {
    class: 'opacity',
    values: [
      '0',
      '10',
      '20',
      '30',
      '40',
      '50',
      '60',
      '70',
      '80',
      '90',
      '100',
    ] as const,
  },
} satisfies Variants.Map;

export default effects;
