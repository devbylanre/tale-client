import colors from '../../props/colors';
import typography from '../../props/typography';
import cv from '../../utils/cv';

const linkVariants = cv({
  variants: {
    size: typography.size,
    align: typography.align,
    weight: typography.weight,
    transform: typography.transform,
    decoration: typography.decoration,
    color: colors.text,
  },

  defaultVariants: {
    size: 16,
    color: 'blue-60',
    decoration: 'none',
  },
});

export default linkVariants;
