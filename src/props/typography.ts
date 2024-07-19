import Variants from '../types/variants';

const typography = {
  size: {
    class: 'text',
    pseudos: ['hover', 'placeholder', 'focus'],
    values: [12, 13, 14, 16, 18, 20, 24, 32, 40, 48, 56, 64, 80] as const,
  },
  weight: {
    class: 'weight',
    responsive: true,
    pseudos: ['hover', 'placeholder', 'focus'],
    values: [400, 500, 600, 700] as const,
  },
  align: {
    class: 'text',
    responsive: true,
    values: ['left', 'center', 'right', 'start', 'end', 'justify'] as const,
  },
  transform: {
    class: 'text',
    values: ['capitalize', 'uppercase', 'lowercase'] as const,
  },
  decoration: {
    class: 'decorate',
    pseudos: ['hover', 'focus', 'placeholder'],
    values: ['none', 'underline', 'overline', 'through'] as const,
  },
  listType: {
    class: 'list-type',
    values: ['none', 'dotted', 'circle', 'square', 'decimal'] as const,
  },
} satisfies Variants.Map;

export default typography;
