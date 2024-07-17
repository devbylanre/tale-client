import Variants from '../types/variants';

const border = {
  width: {
    class: 'border',
    values: ['0', '1', '2', '4', '8'] as const,
  },
  top: {
    class: 'border-t',
    values: ['0', '1', '2', '4', '8'] as const,
  },
  bottom: {
    class: 'border-b',
    values: ['0', '1', '2', '4', '8'] as const,
  },
  left: {
    class: 'border-l',
    values: ['0', '1', '2', '4', '8'] as const,
  },
  right: {
    class: 'border-r',
    values: ['0', '1', '2', '4', '8'] as const,
  },
  style: {
    class: 'border',
    values: ['none', 'solid', 'dashed', 'dotted'] as const,
  },
  radius: {
    class: 'radius',
    values: ['xs', 'sm', 'md', 'lg', 'xl', 'max'] as const,
  },
} satisfies Variants.Map;

export default border;
