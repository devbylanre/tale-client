import React from 'react';
import Box from '../Box/Box';

const Loader = ({ children }: React.PropsWithChildren) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const Parent = React.forwardRef(
  <E extends Box.Elements>(props: Box.Props<E>, ref: Box.Ref<E>) => {
    const {
      mx = 'auto',
      height = '4',
      width = '64',
      overflow = 'hidden',
      borderRadius = 'max',
      position = 'relative',
      backgroundColor = 'primary-95',
      ...rest
    } = props;

    return (
      <Box
        ref={ref}
        mx={mx}
        width={width}
        height={height}
        overflow={overflow}
        position={position}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        {...rest}
      />
    );
  }
);

const Child = React.forwardRef(
  <E extends Box.Elements>(props: Box.Props<E>, ref: Box.Ref<E>) => {
    const {
      className,
      width = '4/12',
      height = 'full',
      borderRadius = 'max',
      position = 'absolute',
      backgroundColor = 'primary-60',
      ...rest
    } = props;

    return (
      <Box
        ref={ref}
        width={width}
        height={height}
        position={position}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        className={`animate--loader ${className}`}
        {...rest}
      />
    );
  }
);

Loader.Parent = Parent;
Loader.Child = Child;
export default Loader;
