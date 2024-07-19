import React from 'react';
import Polymorphic from '../../types/polymorphic';
import flexVariants from './variants';
import Variants from '../../types/variants';

namespace Flex {
  export type Elements = 'div' | 'span';
  export type Props<Element extends Elements = 'div'> =
    Polymorphic.ComponentPropsWithRef<
      Element,
      Variants.Props<typeof flexVariants>
    >;
  export type Ref<Element extends Elements> = Polymorphic.ComponentRef<Element>;
}

const Flex = React.forwardRef(
  <Element extends Flex.Elements>(
    props: Flex.Props<Element>,
    ref: Flex.Ref<Element>
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
      display,
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
      flexWrap,
      flexBasis,
      flexDirection,
      alignSelf,
      alignContent,
      alignItems,
      placeSelf,
      placeContent,
      placeItems,
      justifySelf,
      justifyContent,
      justifyItems,
      overflow,
      overflowX,
      overflowY,
      position,
      zIndex,
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
        className={flexVariants({
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
          display,
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
          flexWrap,
          flexBasis,
          flexDirection,
          alignSelf,
          alignContent,
          alignItems,
          placeSelf,
          placeContent,
          placeItems,
          justifySelf,
          justifyContent,
          justifyItems,
          overflow,
          overflowX,
          overflowY,
          position,
          zIndex,
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

export default Flex;
