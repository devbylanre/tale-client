import React from 'react';
import Box from '../Box/Box';
import FieldProvider from '../../context/FieldContext';
import useField from '../../hooks/useField';
import Label from '../Label/Label';

const Field = ({ children, name }: FieldProvider.Props) => {
  return (
    <FieldProvider
      name={name}
      children={children}
    />
  );
};

const Segment = React.forwardRef(
  <Element extends Box.Elements>(props: Box.Props, ref: Box.Ref<Element>) => {
    const {
      border = '1',
      height = '40',
      borderRadius = 'md',
      borderColor = 'gray-80',
      transitionDuration = 'slow',
      transitionProperty = 'colors',
      transitionTimingFunction = 'ease-in-out',
      ...rest
    } = props;
    const { meta } = useField();

    return (
      <Box
        ref={ref}
        height={height}
        border={border}
        borderRadius={borderRadius}
        transitionProperty={transitionProperty}
        transitionDuration={transitionDuration}
        transitionTimingFunction={transitionTimingFunction}
        borderColor={
          meta.touched && !meta.error
            ? 'blue-90'
            : meta.error && meta.touched
            ? 'gray-90'
            : borderColor
        }
        {...rest}
      />
    );
  }
);

const LabelComponent = React.forwardRef(
  (props: Label.Props, ref: Label.Ref) => {
    const { htmlFor, ...rest } = props;
    const { field } = useField();

    return (
      <Label
        ref={ref}
        htmlFor={field.name || htmlFor}
        {...rest}
      />
    );
  }
);

Field.Label = LabelComponent;
Field.Segment = Segment;
export default Field;
