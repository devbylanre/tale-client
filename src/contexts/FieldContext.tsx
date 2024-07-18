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

namespace FieldProvider {
  export type Props = {
    children?: React.ReactNode;
    name: string;
  };
}

const FieldProvider = ({ children, name }: FieldProvider.Props) => {
  const [field, meta, helper] = useField(name);

  return (
    <FieldContext.Provider value={{ field, meta, helper }}>
      {' '}
      {children}
    </FieldContext.Provider>
  );
};

export default FieldProvider;
