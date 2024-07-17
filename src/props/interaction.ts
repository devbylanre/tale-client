import Variants from '../types/variants';

const interaction = {
  cursor: {
    class: 'cursor',
    values: [
      'wait',
      'help',
      'move',
      'progress',
      'help',
      'none',
      'ban',
      'text',
      'pointer',
    ] as const,
  },

  pointer: {
    class: 'pointer',
    values: ['cursor', 'none', 'auto'] as const,
  },
} satisfies Variants.Map;

export default interaction;
