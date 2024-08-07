import React from 'react';
import Box from '../Box/Box';
import Button from '../Button/Button';
import useModal from '../../hooks/useModal';
import Container from '../Container/Container';
import addPortal from '../../lib/portal';
import ModalProvider from '../../contexts/ModalContext';
import Flex from '../Flex/Flex';

type ModalProps = React.ComponentProps<typeof ModalProvider>;

const Modal = (props: ModalProps) => {
  return <ModalProvider {...props} />;
};

const Overlay = React.forwardRef(
  <E extends Box.Elements>(props: Box.Props<E>, ref: Box.Ref<E>) => {
    const { isVisible } = useModal();
    const {
      style,
      width = 'full',
      height = 'full',
      position = 'fixed',
      backgroundColor = 'darkness-90',
      ...rest
    } = props;

    const defaultStyle: React.CSSProperties = {
      zIndex: -1,
      top: '0rem',
      left: '0rem',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity .15s ease-in-out',
    };

    return (
      <Box
        ref={ref}
        width={width}
        height={height}
        position={position}
        backgroundColor={backgroundColor}
        style={{ ...defaultStyle, ...style }}
        {...rest}
      />
    );
  }
);

const Action = React.forwardRef((props: Button.Props, ref: Button.Ref) => {
  const { onClick, ...rest } = props;
  const { isVisible, setIsVisible } = useModal();

  const handleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible(!isVisible);
    return onClick && onClick(e);
  };

  return (
    <Button
      {...rest}
      ref={ref}
      onClick={handleAction}
    />
  );
});

const Wrapper = React.forwardRef(
  <E extends Flex.Elements>(props: Flex.Props<E>, ref: Flex.Ref<E>) => {
    const {
      style,
      width = 'full',
      height = 'full',
      position = 'fixed',
      justifyContent = 'center',
      flexDirection = 'column',
      ...rest
    } = props;
    const { isVisible } = useModal();

    const defaultStyle: React.CSSProperties = {
      top: '0rem',
      left: '0rem',
      zIndex: 1,
      visibility: isVisible ? 'visible' : 'hidden',
      pointerEvents: isVisible ? 'auto' : 'none',
      transition: 'all .15s ease-in-out',
    };

    return addPortal({
      children: (
        <Flex
          ref={ref}
          width={width}
          height={height}
          position={position}
          flexDirection={flexDirection}
          justifyContent={justifyContent}
          style={{ ...defaultStyle, ...style }}
          {...rest}
        />
      ),
      container: document.querySelector('#portal')!,
    });
  }
);

const Main = React.forwardRef(
  <E extends Container.Elements>(
    props: Container.Props<E>,
    ref: Container.Ref<E>
  ) => {
    const { isVisible } = useModal();
    const {
      style,
      backgroundColor = 'white',
      borderRadius = 'xl',
      ...rest
    } = props;

    const defaultStyle: React.CSSProperties = {
      overflow: 'hidden',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0em)' : 'translateY(1em)',
      transition: 'opacity .15s ease-in-out, transform .15s ease-in-out',
    };

    return (
      <Container
        ref={ref}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        style={{ ...defaultStyle, ...style }}
        {...rest}
      />
    );
  }
);

const Body = React.forwardRef(
  <E extends Box.Elements>(props: Box.Props<E>, ref: Box.Ref<E>) => {
    const { ...rest } = props;
    const { isVisible } = useModal();

    if (!isVisible) return null;

    return (
      <Box
        ref={ref}
        {...rest}
      />
    );
  }
);

Modal.Overlay = Overlay;
Modal.Action = Action;
Modal.Section = Wrapper;
Modal.Body = Body;
Modal.Container = Main;
export default Modal;
