import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useField,
} from 'formik';
import { createContext } from 'react';

type Context = {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  helper: FieldHelperProps<any>;
};

export const FieldContext = createContext<Context | null>(null);

export type FieldProviderProps = {
  children?: React.ReactNode;
  name: string;
};

const FieldProvider = ({ children, name }: FieldProviderProps) => {
  const [field, meta, helper] = useField(name);

  return (
    <FieldContext.Provider value={{ field, meta, helper }}>
      {children}
    </FieldContext.Provider>
  );
};

export default FieldProvider;
