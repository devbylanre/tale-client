import Variants from '../types/variants';

const layout = {
  display: {
    class: 'display',
    responsive: true,
    values: [
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'none',
      'inline-grid',
    ] as const,
  },

  position: {
    class: 'position',
    values: ['sticky', 'absolute', 'static', 'fixed'] as const,
  },

  visibility: {
    class: 'visibility',
    values: ['visible', 'invisible', 'collapse'] as const,
  },

  overflow: {
    class: 'overflow',
    values: ['auto', 'hidden', 'clip', 'visible', 'scroll'] as const,
  },

  overflowX: {
    class: 'overflow-x',
    values: ['auto', 'hidden', 'clip', 'visible', 'scroll'] as const,
  },

  overflowY: {
    class: 'overflow-y',
    values: ['auto', 'hidden', 'clip', 'visible', 'scroll'] as const,
  },

  zIndex: {
    class: 'z',
    values: ['1', '0', '2', '3', '4', '5'] as const,
  },

  objectFit: {
    class: 'object-fit',
    values: ['fill', 'color', 'contain', 'scale-down'] as const,
  },

  container: {
    class: 'container',
    values: ['full', 'xs', 'sm', 'md', 'lg', 'xl'] as const,
  },
} satisfies Variants.Map;

export default layout;
