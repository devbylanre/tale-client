import React from 'react';
import Polymorphic from '../../types/polymorphic';
import useField from '../../hooks/useField';

namespace File {
  export type Props = Polymorphic.ComponentPropsWithRef<'input'>;
  export type Ref = Polymorphic.ComponentRef<'input'>;
}

const File = React.forwardRef((props: File.Props, ref: File.Ref) => {
  const { helper } = useField();
  const { onChange, style, type = 'file', ...rest } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    helper.setValue(selectedFiles);

    onChange && onChange(e);
  };

  const defaultStyle: React.CSSProperties = { display: 'none' };

  return (
    <input
      ref={ref}
      type={type}
      onChange={handleChange}
      style={{ ...defaultStyle, ...style }}
      {...rest}
    />
  );
});

export default File;
