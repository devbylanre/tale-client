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

const flexVariants = cv({
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
    spaceX: spacing.spaceX,
    spaceY: spacing.spaceY,
    display: layout.display,
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
    flexDirection: flex.direction,
    flexWrap: flex.wrap,
    gridColumnSpan: grid.columnSpan,
    gridColumnStart: grid.columnStart,
    gridColumnEnd: grid.columnEnd,
    gridRowSpan: grid.rowSpan,
    gridRowStart: grid.rowStart,
    gridRowEnd: grid.rowEnd,
    alignSelf: justification.alignSelf,
    alignContent: justification.alignContent,
    alignItems: justification.alignItems,
    justifyContent: justification.justifyContent,
    justifyItems: justification.justifyItems,
    justifySelf: justification.justifySelf,
    placeSelf: justification.placeSelf,
    placeContent: justification.placeContent,
    placeItems: justification.placeItems,
    overflow: layout.overflow,
    overflowX: layout.overflowX,
    overflowY: layout.overflowY,
    position: layout.position,
    zIndex: layout.zIndex,
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
    display: 'flex',
  },
});

export default flexVariants;
