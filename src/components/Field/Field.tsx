import React from 'react';
import Box from '../Box/Box';
import FieldProvider from '../../contexts/FieldContext';
import useField from '../../hooks/useField';
import Label from '../Label/Label';
import Flex from '../Flex/Flex';
import Text from '../Text/Text';

type FieldProps = React.ComponentProps<typeof FieldProvider>;

const Field = ({ children, name }: FieldProps) => {
  return (
    <FieldProvider
      name={name}
      children={children}
    />
  );
};

const Block = React.forwardRef(
  <E extends Box.Elements>(props: Box.Props<E>, ref: Box.Ref<E>) => {
    const { spaceY = 'xs', ...rest } = props;

    return (
      <Box
        ref={ref}
        spaceY={spaceY}
        {...rest}
      />
    );
  }
);

const Segment = React.forwardRef(
  <Element extends Box.Elements>(props: Box.Props, ref: Box.Ref<Element>) => {
    const {
      border = '1',
      height = '40',
      borderRadius = 'md',
      overflow = 'hidden',
      position = 'relative',
      borderColor = 'gray-90',
      backgroundColor = 'white',
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
        position={position}
        overflow={overflow}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        transitionProperty={transitionProperty}
        transitionDuration={transitionDuration}
        transitionTimingFunction={transitionTimingFunction}
        borderColor={
          meta.touched && !meta.error
            ? 'blue-60'
            : meta.error && meta.touched
            ? 'red-60'
            : borderColor
        }
        {...rest}
      />
    );
  }
);

const Slot = React.forwardRef(
  <E extends Flex.Elements>(props: Flex.Props<E>, ref: Flex.Ref<E>) => {
    const {
      height = 'full',
      position = 'absolute',
      alignItems = 'center',
      justifyContent = 'center',
      style,
      ...rest
    } = props;

    const defaultStyle: React.CSSProperties = {
      top: '0px',
    };

    return (
      <Flex
        ref={ref}
        height={height}
        position={position}
        alignItems={alignItems}
        justifyContent={justifyContent}
        style={{ ...defaultStyle, ...style }}
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

const Message = React.forwardRef(
  <E extends Text.Elements>(props: Text.Props<E>, ref: Text.Ref<E>) => {
    const { meta } = useField();
    const { as = 'p', size = 14, color, children, ...rest } = props;

    return (
      <Text
        as={as}
        ref={ref}
        size={size}
        color={meta.error && meta.touched ? 'red-60' : color || 'gray-40'}
        {...rest}
      >
        {meta.error && meta.touched ? meta.error : children}
      </Text>
    );
  }
);

Field.Slot = Slot;
Field.Block = Block;
Field.Label = LabelComponent;
Field.Segment = Segment;
Field.Message = Message;
export default Field;
