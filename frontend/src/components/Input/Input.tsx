import {FormLabel, Input as ChakraInput} from '@chakra-ui/react';
import React, {ChangeEventHandler} from 'react';

// Input for single line input
export const Input = ({
  fieldName,
  type,
  htmlFor,
  labelText,
  onChange,
}: {
  fieldName: string;
  type?: string;
  htmlFor: string;
  labelText: string;
  helperText?: string;
  input: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <>
      <FormLabel htmlFor={htmlFor}>{labelText}</FormLabel>
      <ChakraInput name={fieldName.toLowerCase()} type={type} placeholder={fieldName} mb={'20px'} onChange={onChange} />
    </>
  );
};
