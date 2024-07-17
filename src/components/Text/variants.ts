import typography from '../../props/typography';
import cv from '../../utils/cv';

const textVariants = cv({
  variants: {
    size: typography.size,
    align: typography.align,
    weight: typography.weight,
    transform: typography.transform,
    decoration: typography.decoration,
    listType: typography.listType,
  },
});

export default textVariants;
