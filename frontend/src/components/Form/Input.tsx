import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface PropsDTO {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & PropsDTO;

const Input: React.FC<InputProps> = ({ name, ...rest }: PropsDTO) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, inputRef, registerField]);

  return (
    <div>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </div>
  );
};

export default Input;
