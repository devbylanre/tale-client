import Variants from '../types/variants';

const transform = {
  scale: {
    class: 'scale',
    pseudos: ['hover'],
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
      '110',
      '125',
      '150',
    ] as const,
  },

  rotate: {
    class: 'rotate',
    pseudos: ['hover'],
    values: ['0', '2', '4', '8', '45', '90', '180'] as const,
  },

  translateX: {
    class: 'translate-x',
    pseudos: ['hover'],
    values: ['0', '2', '4', '8', '12', '16', '24', '32'] as const,
  },

  translateY: {
    class: 'translate-y',
    pseudos: ['hover'],
    values: ['0', '2', '4', '8', '12', '16', '24', '32'] as const,
  },

  origin: {
    class: 'origin',
    values: [
      'top',
      'left',
      'right',
      'center',
      'bottom',
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ] as const,
  },
} satisfies Variants.Map;

export default transform;
