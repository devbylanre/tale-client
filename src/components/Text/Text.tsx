import React from 'react';
import textVariants from './variants';
import Variants from '../../types/variants';
import Polymorphic from '../../types/polymorphic';

namespace Text {
  export type Elements =
    | 'label'
    | 'span'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p';
  export type Props<Element extends Elements> = Polymorphic.ComponentProps<
    Element,
    Variants.Props<typeof textVariants>
  >;
  export type Ref<Element extends Elements> = Polymorphic.ComponentRef<Element>;
}

const Text = React.forwardRef(
  <Element extends Text.Elements>(
    props: Text.Props<Element>,
    ref: Text.Ref<Element>
  ) => {
    const {
      as,
      size,
      weight,
      align,
      transform,
      decoration,
      listType,
      color,
      className,
      ...rest
    } = props;
    const Component = (as || 'span') as React.ElementType;

    return (
      <Component
        ref={ref}
        className={textVariants({
          size,
          weight,
          align,
          transform,
          decoration,
          listType,
          color,
          className,
        })}
        {...rest}
      />
    );
  }
);

export default Text;
