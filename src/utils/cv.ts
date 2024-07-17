import Variants from '../types/variants';

const cv = <Map extends Variants.Map>(args: {
  variants: Map;
  defaultVariants?: Variants.Values<Map>;
}) => {
  return (props: Variants.Values<Map>) => {
    const { variants, defaultVariants } = args;
    const { ...rest } = props;
    const classes: string[] = [];

    Object.entries(rest).forEach(([key]) => {
      const variant = variants[key];
      const values = rest[key];
      let result = '';

      if (values !== undefined) {
        if (variant.responsive === true) {
          if (typeof values !== 'object') {
            result = `${variant.class}-${values}`;
            classes.push(result);
          } else {
            Object.entries(values).forEach(([key, value]) => {
              result = `${key}:${variant.class}-${value}`;
              classes.push(result);
            });
          }
        } else {
          result = `${variant.class}-${values}`;
          classes.push(result);
        }
      }
    });

    return classes.length > 0 ? classes.join(' ').toString() : null;
  };
};

export default cv;
