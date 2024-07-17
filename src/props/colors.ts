import Variants from '../types/variants';

const shades = (array: string[]) => {
  const result: string[] = [];
  let i = 0;
  while (i < 12) {
    array.map((color) => {
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

const SHADES = shades(['red', 'green', 'yellow', 'blue', 'orange', 'purple']);

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
