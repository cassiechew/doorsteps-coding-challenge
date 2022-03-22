import React, {useState} from 'react';
import {useMutation, useQuery} from 'urql';

import {Box, Container, FormControl, Input} from '@chakra-ui/react';

import components from '../../components';
import {useNavigate} from 'react-router-dom';

const formName = window.location.pathname.slice(1);

// Graphql query definitions.
const ExperimentQuery = `
  query {
    experiment(name: "${formName}") {
      customFields
    }
  }
`;

const FormResponseMutation = `
  mutation ($name: String!, $email: String!, $experimentData: String!, $phone: String!) {
    createFormResponse(createFormResponseInput: {name: $name, email: $email, experimentData: $experimentData, phone: $phone}) {
      name
      email
      experimentData
      phone
    }
  }
`;

const MasterForm = () => {
  // Input data map
  const [inputFields, setInputFields] = useState(
    new Map<string, string>([
      ['name', ''],
      ['email', ''],
      ['phone', ''],
    ]),
  );

  // Urql graphQL hooks
  const [result, reexecuteQuery] = useQuery({
    query: ExperimentQuery,
  });
  const [FormRespResult, updateForm] = useMutation(FormResponseMutation);

  // Hook to let us navigate
  const navigate = useNavigate();

  const {data, fetching, error} = result;

  if (fetching) return <p>Loading...</p>;
  if (error) {
    reexecuteQuery();
    return <p>Oh no... {error.message}</p>;
  }

  const arr: JSX.Element[] = [];

  // Mapping function to generate components from experiment data
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
    setInputFields(data);
  };

  const handleSubmit = () => {
    const TempMap = new Map<string, string>();
    inputFields.forEach((v, k) => {
      if (k === 'name' || k === 'email' || k === 'phone') {
        return;
      }

      TempMap.set(k, v);
    });
    const dataToSend = new Map<string, string>([
      ['name', inputFields.get('name') || ''],
      ['email', inputFields.get('email') || ''],
      ['phone', inputFields.get('phone') || ''],
      ['experimentData', JSON.stringify(Object.fromEntries(TempMap))],
    ]);

    updateForm(Object.fromEntries(dataToSend)).then(() => {
      navigate('/thanks');
    });
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
            fieldName='Phone'
            type='number'
            htmlFor='phone'
            labelText='Phone'
            helperText='We need a valid phone number to contact you!'
            input={inputFields.get('phone') || ''}
            onChange={(e) => handleFormChange(e)}
          />
        </FormControl>
        {arr}
        <FormControl>
          <Input mb={'20px'} type={'submit'} value={'Submit'} onClick={() => handleSubmit()} />
        </FormControl>
      </Container>
    </Box>
  );
};

export default MasterForm;
