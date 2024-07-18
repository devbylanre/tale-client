import Variants from '../types/variants';

const shades = (array: readonly string[]) => {
  const result: string[] = [];
  let i = 0;
  while (i < 12) {
    array.forEach((color) => {
      if (i < 10) {
        result.push(`${color}-${i * 10}`);
      } else {
        result.push(`${color}-${i * 5}`);
      }
    });
    i += 1;
  }

  return result;
};

const SHADES = shades([
  'red',
  'green',
  'yellow',
  'blue',
  'orange',
  'purple',
] as const);

const colors = {
  text: {
    class: 'color',
    pseudos: ['active', 'focus', 'hover', 'placeholder'],
    values: [
      ...SHADES,
      'black',
      'white',
      'current',
      'transparent',
      'inherit',
    ] as const,
  },

  background: {
    class: 'bg',
    pseudos: ['active', 'focus', 'hover', 'placeholder'],
    values: [
      ...SHADES,
      'black',
      'white',
      'current',
      'transparent',
      'inherit',
    ] as const,
  },

  border: {
    class: 'border',
    pseudos: ['active', 'focus', 'hover', 'placeholder'],
    values: [
      ...SHADES,
      'black',
      'white',
      'current',
      'transparent',
      'inherit',
    ] as const,
  },
} satisfies Variants.Map;

export default colors;
