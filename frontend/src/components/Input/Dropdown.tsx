import {FormErrorMessage, FormHelperText, FormLabel, Select as ChakraSelect} from '@chakra-ui/react';
import React, {ChangeEventHandler} from 'react';

export const Dropdown = ({
  fieldName,
  htmlFor,
  labelText,
  helperText,
  input,
  onChange,
  options,
}: {
  fieldName: string;
  htmlFor: string;
  labelText: string;
  helperText?: string;
  input: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
}) => {
  const isError = input === '';

  return (
    <>
      <FormLabel htmlFor={htmlFor}>{labelText}</FormLabel>
      <ChakraSelect name={fieldName.toLowerCase()} mb={'20px'} onChange={onChange}>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </ChakraSelect>
      {!isError ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </>
  );
};
