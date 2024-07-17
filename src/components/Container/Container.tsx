import React from 'react';
import Polymorphic from '../../types/polymorphic';
import containerVariants from './variants';
import Variants from '../../types/variants';

namespace Container {
  export type Elements = 'div' | 'span';
  export type Props<Element extends Elements = 'div'> =
    Polymorphic.ComponentPropsWithRef<
      Element,
      Variants.Props<typeof containerVariants>
    >;
  export type Ref<Element extends Elements> = Polymorphic.ComponentRef<Element>;
}

const Container = React.forwardRef(
  <Element extends Container.Elements>(
    props: Container.Props<Element>,
    ref: Container.Ref<Element>
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
        className={containerVariants({
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

export default Container;
