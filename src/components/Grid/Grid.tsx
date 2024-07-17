import React from 'react';
import Polymorphic from '../../types/polymorphic';
import Variants from '../../types/variants';
import gridVariants from './variants';

namespace Grid {
  export type Elements = 'div' | 'span';
  export type Props<Element extends Elements = 'div'> =
    Polymorphic.ComponentPropsWithRef<
      Element,
      Variants.Props<typeof gridVariants>
    >;
  export type Ref<Element extends Elements> = Polymorphic.ComponentRef<Element>;
}

const Grid = React.forwardRef(
  <Element extends Grid.Elements>(
    props: Grid.Props<Element>,
    ref: Grid.Ref<Element>
  ) => {
    const {
      as,
      m,
      mx,
      my,
      ms,
      me,
      mt,
      mb,
      p,
      px,
      py,
      ps,
      pe,
      pt,
      pb,
      spaceX,
      spaceY,
      border,
      borderTop,
      borderLeft,
      borderRight,
      borderBottom,
      borderColor,
      backgroundColor,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      flex,
      flexBasis,
      alignSelf,
      alignContent,
      alignItems,
      placeSelf,
      placeContent,
      placeItems,
      justifySelf,
      justifyContent,
      justifyItems,
      gridColumn,
      gridColumnSpan,
      gridColumnStart,
      gridColumnEnd,
      gridRow,
      gridRowSpan,
      gridRowStart,
      gridRowEnd,
      scale,
      rotate,
      translateX,
      translateY,
      transitionProperty,
      transitionDelay,
      transitionTimingFunction,
      transitionDuration,
      ...rest
    } = props;
    const Component = (as || 'div') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={gridVariants({
          m,
          mx,
          my,
          ms,
          me,
          mt,
          mb,
          p,
          px,
          py,
          ps,
          pe,
          pt,
          pb,
          spaceX,
          spaceY,
          border,
          borderTop,
          borderLeft,
          borderRight,
          borderBottom,
          borderColor,
          backgroundColor,
          width,
          minWidth,
          maxWidth,
          height,
          minHeight,
          maxHeight,
          flex,
          flexBasis,
          alignSelf,
          alignContent,
          alignItems,
          placeSelf,
          placeItems,
          placeContent,
          justifySelf,
          justifyContent,
          justifyItems,
          gridColumn,
          gridColumnSpan,
          gridColumnStart,
          gridColumnEnd,
          gridRow,
          gridRowSpan,
          gridRowStart,
          gridRowEnd,
          scale,
          rotate,
          translateX,
          translateY,
          transitionProperty,
          transitionDelay,
          transitionTimingFunction,
          transitionDuration,
        })}
        {...rest}
      />
    );
  }
);

export default Grid;
