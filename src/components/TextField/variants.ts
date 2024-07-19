import colors from '../../props/colors';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import typography from '../../props/typography';
import cv from '../../utils/cv';

const textFieldVariants = cv({
  variants: {
    px: spacing.paddingX,
    py: spacing.paddingY,
    pt: spacing.paddingTop,
    pb: spacing.paddingBottom,
    ps: spacing.paddingStart,
    pe: spacing.paddingEnd,
    width: sizing.width,
    height: sizing.height,
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.transform,
    color: colors.text,
    backgroundColor: colors.background,
  },

  defaultVariants: {
    px: 'sm',
    width: 'full',
    height: 'full',
    color: 'gray-10',
    backgroundColor: 'inherit',
  },
});

export default textFieldVariants;
