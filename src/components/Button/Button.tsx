import React from 'react';
import Polymorphic from '../../types/polymorphic';
import Variants from '../../types/variants';
import buttonVariants from './variants';

namespace Button {
  export type Props = Polymorphic.ComponentProps<
    'button',
    Variants.Props<typeof buttonVariants>
  >;
  export type Ref = Polymorphic.ComponentRef<'button'>;
}

const Button = React.forwardRef((props: Button.Props, ref: Button.Ref) => {
  const {
    as,
    size,
    weight,
    align,
    width,
    height,
    display,
    border,
    transform,
    borderColor,
    alignItems,
    cursor,
    pointer,
    color,
    borderRadius,
    justifyContent,
    backgroundColor,
    disabled,
    opacity,
    className,
    pseudos = { hover: { backgroundColor: 'primary-50' } },
    ...rest
  } = props;
  const Component = as || 'button';

  return (
    <Component
      ref={ref}
      disabled={disabled}
      className={buttonVariants({
        size,
        weight,
        align,
        transform,
        width,
        height,
        display,
        border,
        opacity: disabled ? '50' : opacity,
        alignItems,
        justifyContent,
        borderColor,
        color,
        borderRadius,
        cursor,
        pointer,
        backgroundColor,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Button;
