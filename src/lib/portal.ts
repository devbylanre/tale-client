import React from 'react';
import { createPortal } from 'react-dom';

type AddPortal = {
  children: React.ReactNode;
  container: Element;
};

const addPortal = ({ children, container }: AddPortal) => {
  return createPortal(children, container);
};

export default addPortal;
