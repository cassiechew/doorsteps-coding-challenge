import {FormErrorMessage, FormHelperText, FormLabel, Textarea as ChakraTextarea} from '@chakra-ui/react';
import React, {ChangeEventHandler} from 'react';

export const Input = ({
  fieldName,
  htmlFor,
  labelText,
  helperText,
  input,
  onChange,
}: {
  fieldName: string;
  htmlFor: string;
  labelText: string;
  helperText?: string;
  input: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  const isError = input === '';

  return (
    <>
      <FormLabel htmlFor={htmlFor}>{labelText}</FormLabel>
      <ChakraTextarea name={fieldName.toLowerCase()} placeholder={fieldName} mb={'20px'} onChange={onChange} />
      {!isError ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </>
  );
};
