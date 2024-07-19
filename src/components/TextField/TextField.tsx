import React from 'react';
import Polymorphic from '../../types/polymorphic';
import useField from '../../hooks/useField';
import Variants from '../../types/variants';
import textFieldVariants from './variants';

namespace TextField {
  export type Elements = 'input';
  export type Props<E extends Elements> = Polymorphic.ComponentProps<
    E,
    Variants.Props<typeof textFieldVariants>
  >;
  export type Ref<E extends Elements> = Polymorphic.ComponentRef<E>;
}

const TextField = React.forwardRef(
  <E extends TextField.Elements>(
    props: TextField.Props<E>,
    ref: TextField.Ref<E>
  ) => {
    const {
      as,
      px,
      py,
      ps,
      pe,
      pt,
      pb,
      onChange,
      onFocus,
      onBlur,
      size,
      weight,
      width,
      align,
      transform,
      color,
      backgroundColor,
      height,
      style,
      ...rest
    } = props;
    const Component = (as || 'input') as React.ElementType;
    const { helper } = useField();

    const handleChange = (e: any) => {
      helper.setValue(e.target.value);
      onChange && onChange(e);
    };

    const handleFocus = (e: any) => {
      helper.setTouched(true);
      onFocus && onFocus(e);
    };
    const handleBlur = (e: any) => {
      helper.setTouched(false);
      onBlur && onBlur(e);
    };

    const defaultStyle: React.CSSProperties = {
      outline: 'none',
    };

    return (
      <Component
        ref={ref}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        style={{ ...defaultStyle, ...style }}
        className={textFieldVariants({
          px,
          py,
          ps,
          pe,
          pt,
          pb,
          width,
          height,
          align,
          transform,
          color,
          size,
          backgroundColor,
        })}
        {...rest}
      />
    );
  }
);

export default TextField;
