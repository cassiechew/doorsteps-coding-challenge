import {FormErrorMessage, FormHelperText, FormLabel, Input as ChakraInput} from '@chakra-ui/react';
import React, {ChangeEventHandler} from 'react';

export const Input = ({
  fieldName,
  type,
  htmlFor,
  labelText,
  helperText,
  input,
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
  const isError = input === '';

  return (
    <>
      <FormLabel htmlFor={htmlFor}>{labelText}</FormLabel>
      <ChakraInput name={fieldName.toLowerCase()} type={type} placeholder={fieldName} mb={'20px'} onChange={onChange} />
      {!isError ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </>
  );
};
