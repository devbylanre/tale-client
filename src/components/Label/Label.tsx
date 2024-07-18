import React from 'react';
import Polymorphic from '../../types/polymorphic';
import Variants from '../../types/variants';
import labelVariants from './variants';

namespace Label {
  export type Props = Polymorphic.ComponentProps<
    'label',
    Variants.Props<typeof labelVariants>
  >;
  export type Ref = Polymorphic.ComponentRef<'label'>;
}

const Label = React.forwardRef((props: Label.Props, ref: Label.Ref) => {
  const { as, size, weight, align, transform, ...rest } = props;
  const Component = as ? as : 'label';

  return (
    <Component
      ref={ref}
      className={labelVariants({
        size,
        weight,
        align,
        transform,
      })}
      {...rest}
    />
  );
});

export default Label;
