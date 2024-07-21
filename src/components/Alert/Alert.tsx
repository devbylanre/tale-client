import React from 'react';
import AlertProvider from '../../contexts/AlertContext';
import Flex from '../Flex/Flex';
import useAlert from '../../hooks/useAlert';
import Button from '../Button/Button';
import Box from '../Box/Box';

type AlertProps = React.ComponentProps<typeof AlertProvider>;

const Alert = ({ children, duration }: AlertProps) => {
  return <AlertProvider duration={duration}>{children}</AlertProvider>;
};

const Content = React.forwardRef(
  <E extends Box.Elements>(props: Box.Props<E>, ref: Box.Ref<E>) => {
    const { ...rest } = props;

    return (
      <Box
        ref={ref}
        {...rest}
      />
    );
  }
);

const Body = React.forwardRef(
  <E extends Flex.Elements>(props: Flex.Props<E>, ref: Flex.Ref<E>) => {
    const {
      style,
      p = 'sm',
      borderRadius = 'sm',
      backgroundColor = 'red-60',
      ...rest
    } = props;

    return (
      <Flex
        p={p}
        ref={ref}
        role={'alert'}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        {...rest}
      />
    );
  }
);

const Dismiss = React.forwardRef((props: Button.Props, ref: Button.Ref) => {
  const { onClick, ...rest } = props;
  const { setIsVisible } = useAlert();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(false);
    onClick && onClick(e);
  };

  return (
    <Button
      ref={ref}
      {...rest}
      onClick={handleClick}
    />
  );
});

Alert.Body = Body;
Alert.Content = Content;
Alert.Dismiss = Dismiss;
export default Alert;
