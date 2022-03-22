import {FormLabel, Select as ChakraSelect} from '@chakra-ui/react';
import React, {ChangeEventHandler} from 'react';

// Dropdown Input type
export const Dropdown = ({
  fieldName,
  htmlFor,
  labelText,
  onChange,
  options,
}: {
  fieldName: string;
  htmlFor: string;
  labelText: string;
  input: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
}) => {
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
    </>
  );
};
