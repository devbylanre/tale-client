import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import Polymorphic from '../../types/polymorphic';
import Variants from '../../types/variants';
import iconVariants from './variants';

namespace Icon {
  export type Props = Polymorphic.ComponentPropsWithRef<
    'svg',
    { iconType: IconType } & IconBaseProps & Variants.Props<typeof iconVariants>
  >;
  export type Ref = Polymorphic.ComponentRef<'svg'>;
}

const Icon = React.forwardRef((props: Icon.Props, ref: Icon.Ref) => {
  const {
    as,
    iconType,
    size,
    width,
    height,
    color,
    className,
    pseudos,
    ...rest
  } = props;

  const Component = iconType;

  return (
    <Component
      className={iconVariants({
        size,
        width,
        height,
        color,
        pseudos,
        className,
      })}
      {...rest}
    />
  );
});

export default Icon;
