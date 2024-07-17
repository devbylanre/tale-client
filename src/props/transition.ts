import Variants from '../types/variants';

const transition = {
  property: {
    class: 'transition',
    values: [
      'all',
      'colors',
      'shadow',
      'default',
      'opacity',
      'transform',
    ] as const,
  },

  duration: {
    class: 'transition-duration',
    values: ['slow', 'slower', 'fast', 'faster'] as const,
  },

  delay: {
    class: 'transition-delay',
    values: ['slow', 'slower', 'fast', 'faster'] as const,
  },

  timing: {
    class: 'transition-timing',
    values: ['ease', 'ease-in', 'linear', 'ease-out', 'ease-in-out'] as const,
  },
} satisfies Variants.Map;

export default transition;
