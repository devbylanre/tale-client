import typography from '../../props/typography';
import cv from '../../utils/cv';

const labelVariants = cv({
  variants: {
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.transform,
  },

  defaultVariants: {
    size: 16,
  },
});

export default labelVariants;
