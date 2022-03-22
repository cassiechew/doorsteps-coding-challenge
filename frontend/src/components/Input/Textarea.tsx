import {FormLabel, Textarea as ChakraTextarea} from '@chakra-ui/react';
import React, {ChangeEventHandler} from 'react';

// Textarea type input
export const Textarea = ({
  fieldName,
  htmlFor,
  labelText,
  onChange,
}: {
  fieldName: string;
  htmlFor: string;
  labelText: string;
  helperText?: string;
  input: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  return (
    <>
      <FormLabel htmlFor={htmlFor}>{labelText}</FormLabel>
      <ChakraTextarea name={fieldName.toLowerCase()} placeholder={fieldName} mb={'20px'} onChange={onChange} />
    </>
  );
};
