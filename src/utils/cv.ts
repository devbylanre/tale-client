import Variants from '../types/variants';

const sortVariants = (props: {
  variant: Variants.Config;
  values: any;
  classes: string[];
}) => {
  const { variant, values, classes } = props;

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
};

const cv = <Map extends Variants.Map>(args: {
  variants: Map;
  defaultVariants?: Variants.Values<Map>;
}) => {
  return (props: Variants.Values<Map>) => {
    const { variants, defaultVariants } = args;
    const { ...objects } = props;
    const classes: string[] = [];

    Object.entries(objects).forEach(([key]) => {
      const variant = variants[key];
      const values = objects[key];
      sortVariants({ variant, values, classes });
    });

    if (defaultVariants !== undefined) {
      Object.entries(defaultVariants).forEach(([key, values]) => {
        const variant = variants[key];
        sortVariants({ variant, values, classes });
      });
    }

    return classes.length > 0 ? classes.join(' ').toString() : undefined;
  };
};

export default cv;
