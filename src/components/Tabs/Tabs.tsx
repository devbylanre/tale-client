import React from 'react';
import TabsProvider from '../../contexts/TabsContext';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
import useTabs from '../../hooks/useTabs';

type TabsProps = React.ComponentProps<typeof TabsProvider>;

const Tabs = (props: TabsProps) => {
  return <TabsProvider {...props} />;
};

const Triggers = React.forwardRef(
  <E extends Flex.Elements>(props: Flex.Props<E>, ref: Flex.Ref<E>) => {
    const {
      p = '2xs',
      gap = 'xs',
      borderRadius = 'md',
      backgroundColor = 'gray-100',
      ...rest
    } = props;

    return (
      <Flex
        ref={ref}
        p={p}
        gap={gap}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        {...rest}
      />
    );
  }
);

const Trigger = React.forwardRef(
  (props: Button.Props & { value: string }, ref: Button.Ref) => {
    const { activeTab, setActiveTab } = useTabs();
    const isActive = activeTab === props.value;
    const {
      style,
      onClick,
      size = 14,
      weight = 400,
      height = '32',
      width = 'full',
      color = 'gray-10',
      borderRadius = 'md',
      backgroundColor = isActive ? 'white' : 'inherit',
      pseudos = {
        hover: { backgroundColor: isActive ? 'white' : 'gray-95' },
      },
      ...rest
    } = props;

    const defaultStyle: React.CSSProperties = {
      boxShadow: isActive ? '0px 0px 6px 0px var(--darkness-10)' : undefined,
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setActiveTab(props.value);
      onClick && onClick(e);
    };

    return (
      <Button
        ref={ref}
        size={size}
        width={width}
        color={color}
        weight={weight}
        height={height}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        pseudos={pseudos}
        style={{ ...defaultStyle, ...style }}
        onClick={handleClick}
        {...rest}
      />
    );
  }
);

const Body = React.forwardRef(
  <E extends Flex.Elements>(
    props: Flex.Props<E> & { value: string },
    ref: Flex.Ref<E>
  ) => {
    const { activeTab } = useTabs();
    const { value, flexDirection = 'column', ...rest } = props;

    if (value !== activeTab) return null;

    return (
      <Flex
        ref={ref}
        flexDirection={flexDirection}
        {...rest}
      />
    );
  }
);

Tabs.Triggers = Triggers;
Tabs.Trigger = Trigger;
Tabs.Body = Body;
export default Tabs;
