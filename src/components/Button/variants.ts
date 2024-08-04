import border from '../../props/border';
import colors from '../../props/colors';
import effects from '../../props/effects';
import interaction from '../../props/interaction';
import justification from '../../props/justification';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transition from '../../props/transition';
import typography from '../../props/typography';
import cv from '../../utils/cv';

const buttonVariants = cv({
  variants: {
    p: spacing.padding,
    ps: spacing.paddingStart,
    pe: spacing.paddingEnd,
    pt: spacing.paddingTop,
    pb: spacing.paddingBottom,
    px: spacing.paddingX,
    py: spacing.paddingY,
    gap: spacing.gap,
    size: typography.size,
    weight: typography.weight,
    align: typography.align,
    transform: typography.transform,
    width: sizing.width,
    height: sizing.height,
    display: layout.display,
    border: border.width,
    opacity: effects.opacity,
    borderRadius: border.radius,
    color: colors.text,
    borderColor: colors.border,
    backgroundColor: colors.background,
    alignItems: justification.alignItems,
    justifyContent: justification.justifyContent,
    cursor: interaction.cursor,
    pointer: interaction.pointer,
    transitionProperty: transition.property,
    transitionDuration: transition.duration,
    transitionDelay: transition.delay,
    transitionTimingFunction: transition.timing,
  },

  defaultVariants: {
    px: 'lg',
    size: 16,
    gap: 'sm',
    height: '40',
    color: 'white',
    cursor: 'pointer',
    borderRadius: 'md',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    backgroundColor: 'primary-60',
  },
});

export default buttonVariants;
