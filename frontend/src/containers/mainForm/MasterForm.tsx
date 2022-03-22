import React, {useState} from 'react';
import {useQuery} from 'urql';

import {Box, Container, FormControl, Input} from '@chakra-ui/react';

import components from '../../components';

const formName = window.location.pathname.slice(1);
const ExperimentQuery = `
  query {
    experiment(name: "${formName}") {
      customFields
    }
  }
`;

const MasterForm = () => {
  const [inputFields, setInputFields] = useState(
    new Map<string, string>([
      ['name', ''],
      ['email', ''],
      ['phoneNumber', ''],
    ]),
  );

  const [result, reexecuteQuery] = useQuery({
    query: ExperimentQuery,
  });

  const {data, fetching, error} = result;

  if (fetching) return <p>Loading...</p>;
  if (error) {
    reexecuteQuery();
    return <p>Oh no... {error.message}</p>;
  }

  const arr: JSX.Element[] = [];

  JSON.parse(data.experiment.customFields).map((jsonFields: {name: string; type: string; options?: string[]}) => {
    switch (jsonFields.type) {
      case 'single':
        arr.push(
          <FormControl key={jsonFields.name}>
            <components.Input
              fieldName={jsonFields.name}
              type={jsonFields.type}
              htmlFor={jsonFields.name}
              labelText={jsonFields.name}
              input={inputFields.get(jsonFields.name) || ''}
              onChange={(e) => handleFormChange(e)}
            />
          </FormControl>,
        );
        break;
      case 'multi':
        arr.push(
          <FormControl key={jsonFields.name}>
            <components.Textarea
              fieldName={jsonFields.name}
              htmlFor={jsonFields.name}
              labelText={jsonFields.name}
              input={inputFields.get(jsonFields.name) || ''}
              onChange={(e) => handleFormChange(e)}
            />
          </FormControl>,
        );
        break;
      case 'list':
        if (jsonFields.options === undefined) break;
        arr.push(
          <FormControl key={jsonFields.name}>
            <components.Dropdown
              fieldName={jsonFields.name}
              htmlFor={jsonFields.name}
              labelText={jsonFields.name}
              input={inputFields.get(jsonFields.name) || ''}
              onChange={(e) => handleFormChange(e)}
              options={jsonFields.options}
            />
          </FormControl>,
        );
    }
  });

  const handleFormChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const data = inputFields;
    data.set(e.target.name, e.target.value);
    console.log(data);
    setInputFields(data);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <Box h={'100vh'} p={'25px'} pt={'50px'}>
      <components.Heading text='Form' />
      <Container pt={'50px'} h={'80%'}>
        <FormControl>
          <components.Input
            fieldName='Name'
            type='text'
            htmlFor='name'
            labelText='Name'
            helperText='Just your name!'
            input={inputFields.get('name') || ''}
            onChange={(e) => handleFormChange(e)}
          />
        </FormControl>
        <FormControl>
          <components.Input
            fieldName='Email'
            type='email'
            htmlFor='email'
            labelText='Email'
            helperText='We will not share your email!'
            input={inputFields.get('email') || ''}
            onChange={(e) => handleFormChange(e)}
          />
        </FormControl>
        <FormControl>
          <components.Input
            fieldName='Phone Number'
            htmlFor='phonenumber'
            labelText='Phone Number'
            helperText='We need a valid phone number to contact you!'
            input={inputFields.get('phoneNumber') || ''}
            onChange={(e) => handleFormChange(e)}
          />
        </FormControl>
        {arr}
        <FormControl>
          <Input type={'submit'} value={'Submit'} onClick={(e) => handleSubmit(e)} />
        </FormControl>
      </Container>
    </Box>
  );
};

export default MasterForm;
