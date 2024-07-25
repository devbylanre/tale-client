import React from 'react';
import Polymorphic from '../../types/polymorphic';
import boxVariants from './variants';
import Variants from '../../types/variants';

namespace Box {
  export type Elements = 'div' | 'span';
  export type Props<Element extends Elements = 'div'> =
    Polymorphic.ComponentPropsWithRef<
      Element,
      Variants.Props<typeof boxVariants>
    >;
  export type Ref<Element extends Elements> = Polymorphic.ComponentRef<Element>;
}

const Box = React.forwardRef(
  <Element extends Box.Elements>(
    props: Box.Props<Element>,
    ref: Box.Ref<Element>
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
      borderRadius,
      backgroundColor,
      size,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      flex,
      flexBasis,
      alignSelf,
      placeSelf,
      justifySelf,
      overflow,
      overflowX,
      overflowY,
      position,
      scale,
      rotate,
      translateX,
      translateY,
      transitionProperty,
      transitionDelay,
      transitionTimingFunction,
      transitionDuration,
      pseudos,
      className,
      ...rest
    } = props;
    const Component = (as || 'div') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={boxVariants({
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
          borderRadius,
          borderColor,
          backgroundColor,
          size,
          width,
          minWidth,
          maxWidth,
          height,
          minHeight,
          maxHeight,
          flex,
          flexBasis,
          alignSelf,
          placeSelf,
          justifySelf,
          overflow,
          overflowX,
          overflowY,
          position,
          scale,
          rotate,
          translateX,
          translateY,
          transitionProperty,
          transitionDelay,
          transitionTimingFunction,
          transitionDuration,
          pseudos,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Box;
