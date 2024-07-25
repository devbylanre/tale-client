import React from 'react';
import Polymorphic from '../../types/polymorphic';
import Variants from '../../types/variants';
import sectionVariants from './variants';

namespace Section {
  export type Elements =
    | 'div'
    | 'section'
    | 'span'
    | 'main'
    | 'footer'
    | 'header';
  export type Props<Element extends Elements = 'div'> =
    Polymorphic.ComponentPropsWithRef<
      Element,
      Variants.Props<typeof sectionVariants>
    >;
  export type Ref<Element extends Elements> = Polymorphic.ComponentRef<Element>;
}

const Section = React.forwardRef(
  <Element extends Section.Elements>(
    props: Section.Props<Element>,
    ref: Section.Ref<Element>
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
    const Component = (as || 'section') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={sectionVariants({
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

export default Section;
