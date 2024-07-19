import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import Polymorphic from '../../types/polymorphic';
import Variants from '../../types/variants';
import linkVariants from './variants';

namespace Link {
  export type Props = Polymorphic.ComponentProps<
    'a',
    Variants.Props<typeof linkVariants> & NavLinkProps
  >;

  export type Ref = Polymorphic.ComponentRef<'a'>;
}

const Link = React.forwardRef((props: Link.Props, ref: Link.Ref) => {
  const {
    as,
    size,
    weight,
    align,
    transform,
    decoration,
    color,
    pseudos = { hover: { decoration: 'underline', color: 'blue-50' } },
    className,
    ...rest
  } = props;

  return (
    <NavLink
      ref={ref}
      className={linkVariants({
        size,
        weight,
        align,
        transform,
        decoration,
        color,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Link;
