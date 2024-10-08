import border from '../../props/border';
import colors from '../../props/colors';
import flex from '../../props/flex';
import grid from '../../props/grid';
import justification from '../../props/justification';
import layout from '../../props/layout';
import sizing from '../../props/sizing';
import spacing from '../../props/spacing';
import transform from '../../props/transform';
import transition from '../../props/transition';
import cv from '../../utils/cv';

const gridVariants = cv({
  variants: {
    m: spacing.margin,
    mt: spacing.marginTop,
    mb: spacing.marginBottom,
    me: spacing.marginEnd,
    ms: spacing.marginStart,
    mx: spacing.marginX,
    my: spacing.marginY,
    p: spacing.padding,
    pt: spacing.paddingTop,
    pb: spacing.paddingBottom,
    pe: spacing.paddingEnd,
    ps: spacing.paddingStart,
    px: spacing.paddingX,
    py: spacing.paddingY,
    gap: spacing.gap,
    gapX: spacing.gapX,
    gapY: spacing.gapY,
    display: layout.display,
    position: layout.position,
    border: border.width,
    borderTop: border.top,
    borderBottom: border.bottom,
    borderLeft: border.left,
    borderRight: border.right,
    borderRadius: border.radius,
    borderColor: colors.border,
    backgroundColor: colors.background,
    width: sizing.width,
    minWidth: sizing.minWidth,
    maxWidth: sizing.maxWidth,
    height: sizing.height,
    minHeight: sizing.minHeight,
    maxHeight: sizing.maxHeight,
    flexBasis: flex.basis,
    flex: flex.flex,
    gridColumn: grid.column,
    gridRow: grid.row,
    gridColumnSpan: grid.columnSpan,
    gridColumnStart: grid.columnStart,
    gridColumnEnd: grid.columnEnd,
    gridRowSpan: grid.rowSpan,
    gridRowStart: grid.rowStart,
    gridRowEnd: grid.rowEnd,
    alignSelf: justification.alignSelf,
    alignContent: justification.alignContent,
    alignItems: justification.alignItems,
    justifySelf: justification.justifySelf,
    justifyContent: justification.justifyContent,
    justifyItems: justification.justifyItems,
    placeContent: justification.placeContent,
    placeItems: justification.placeItems,
    placeSelf: justification.placeSelf,
    scale: transform.scale,
    rotate: transform.rotate,
    translateX: transform.translateX,
    translateY: transform.translateY,
    transitionProperty: transition.property,
    transitionDuration: transition.duration,
    transitionDelay: transition.delay,
    transitionTimingFunction: transition.timing,
  },

  defaultVariants: {
    display: 'grid',
  },
});

export default gridVariants;
