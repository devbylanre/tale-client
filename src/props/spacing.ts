import Variants from '../types/variants';

const VALUES = [
  'auto',
  'none',
  '2xs',
  'xs',
  'sn',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
  '10xl',
  'max',
] as const;

const spacing = {
  margin: {
    class: 'm',
    responsive: true,
    values: VALUES,
  },

  marginTop: {
    class: 'mt',
    responsive: true,
    values: VALUES,
  },

  marginBottom: {
    class: 'mb',
    responsive: true,
    values: VALUES,
  },

  marginStart: {
    class: 'ms',
    responsive: true,
    values: VALUES,
  },

  marginEnd: {
    class: 'me',
    responsive: true,
    values: VALUES,
  },

  marginX: {
    class: 'mx',
    responsive: true,
    values: VALUES,
  },

  marginY: {
    class: 'my',
    responsive: true,
    values: VALUES,
  },

  padding: {
    class: 'p',
    responsive: true,
    values: VALUES,
  },

  paddingTop: {
    class: 'pt',
    responsive: true,
    values: VALUES,
  },

  paddingBottom: {
    class: 'pb',
    responsive: true,
    values: VALUES,
  },

  paddingStart: {
    class: 'ps',
    responsive: true,
    values: VALUES,
  },

  paddingEnd: {
    class: 'pe',
    responsive: true,
    values: VALUES,
  },

  paddingX: {
    class: 'px',
    responsive: true,
    values: VALUES,
  },

  paddingY: {
    class: 'py',
    responsive: true,
    values: VALUES,
  },

  spaceX: {
    class: 'space-x',
    responsive: true,
    values: VALUES,
  },

  spaceY: {
    class: 'space-y',
    responsive: true,
    values: VALUES,
  },

  gap: {
    class: 'gap',
    responsive: true,
    values: VALUES,
  },

  gapX: {
    class: 'gap-x',
    responsive: true,
    values: VALUES,
  },

  gapY: {
    class: 'gap-y',
    responsive: true,
    values: VALUES,
  },
} satisfies Variants.Map;

export default spacing;
