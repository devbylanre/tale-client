import Variants from '../types/variants';

const sortVariants = (props: {
  values: any;
  pseudo?: string;
  variant: Variants.Config;
  classes: string[];
}) => {
  const { variant, pseudo, values, classes } = props;
  let result = '';

  if (values !== undefined) {
    if (variant.responsive === true) {
      if (typeof values !== 'object') {
        result = `${pseudo ? pseudo + ':' : ''}${variant.class}-${values}`;
        classes.push(result);
      } else {
        Object.entries(values).forEach(([breakpoint, value]) => {
          result = `${pseudo ? pseudo + ':' : ''}${
            breakpoint === 'initial' ? '' : breakpoint + ':'
          }${variant.class}-${value}`;
          classes.push(result);
        });
      }
    } else {
      result = `${pseudo ? pseudo + ':' : ''}${variant.class}-${values}`;
      classes.push(result);
    }
  }
};

const cv = <Map extends Variants.Map>(args: {
  variants: Map;
  defaultVariants?: Variants.Values<Map>;
}) => {
  return (
    props: Variants.Values<Map> & {
      className?: string;
      pseudos?: Variants.PseudosValues<Map>;
    }
  ) => {
    const { variants, defaultVariants } = args;
    const { className, pseudos, ...maps } = props;
    const classes: string[] = [];

    if (defaultVariants) {
      Object.entries(defaultVariants).forEach(([key, values]) => {
        const variant = variants[key];
        return sortVariants({ variant, values, classes });
      });
    }

    Object.entries(maps).forEach(([key, values]) => {
      const variant = variants[key];

      if (values) {
        variant.values.forEach((value) => {
          const classToRemove = `${variant.class}-${value}`;
          const index = classes.indexOf(classToRemove);

          if (index !== -1) {
            classes.splice(index, 1);
            return;
          }
        });
        sortVariants({ variant: variant, values: values, classes: classes });
      }
    });

    if (pseudos) {
      Object.entries(pseudos).forEach(([pseudo, maps]) => {
        Object.entries(maps).forEach(([key]) => {
          const variant = variants[key];
          const values = maps[key];

          sortVariants({ pseudo: pseudo, variant, values: values, classes });
        });
      });
    }

    if (className !== undefined) {
      classes.push(className);
    }

    return classes.length > 0 ? classes.join(' ').toString() : undefined;
  };
};

export default cv;
