import React from 'react';

namespace Polymorphic {
  type As<Element extends React.ElementType> = {
    as?: Element;
  };

  type PropsToOmit<
    Element extends React.ElementType,
    AdditionalProps = {}
  > = Omit<React.ComponentPropsWithoutRef<Element>, keyof AdditionalProps> &
    As<Element>;

  export type ComponentProps<
    Element extends React.ElementType,
    AdditionalProps = {}
  > = PropsToOmit<Element, AdditionalProps> & AdditionalProps;

  export type ComponentRef<Element extends React.ElementType> =
    React.ComponentPropsWithRef<Element>['ref'];

  export type ComponentPropsWithRef<
    Element extends React.ElementType,
    AdditionalProps = {}
  > = ComponentProps<Element, AdditionalProps> & {
    ref?: ComponentRef<Element>;
  };
}

export default Polymorphic;
