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
    p,
    pe,
    ps,
    pt,
    pb,
    px,
    py,
    gap,
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
    pseudos,
    ...rest
  } = props;
  const Component = as || 'button';

  return (
    <Component
      ref={ref}
      disabled={disabled}
      className={buttonVariants({
        p,
        pe,
        ps,
        pt,
        pb,
        px,
        py,
        gap,
        size,
        weight,
        align,
        transform,
        width,
        height,
        display,
        border,
        opacity: disabled ? '60' : opacity,
        alignItems,
        justifyContent,
        borderColor,
        color,
        borderRadius,
        cursor: disabled ? 'ban' : cursor,
        pointer,
        backgroundColor,
        pseudos: disabled
          ? {}
          : pseudos || { hover: { backgroundColor: 'primary-50' } },
        className,
      })}
      {...rest}
    />
  );
});

export default Button;
