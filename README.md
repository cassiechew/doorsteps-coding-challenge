# doorsteps-coding-challenge

This is a response to the Doorsteps coding challenge.
Built with NestJS, GraphQL, React, Typescript, Urql, ChakraUI.

## How to run

So this app has been dockerized. The dockerfiles do run the installs.

Start the dev docker environment with

```
make dev
```

This will allow hot code reloading.

Otherwise the 'prod' environment can be made with

```
make prod
```

Either environments can be built with

Dev
```
make build
```

Prod
```
make build-prod
```

### Installing

#### API

If this fails to work or you would like to install the files run.

```
make install
```

This should install the files. But if that fails, you will have to go into the api folder and run

```
yarn
```

and

```
yarn prisma generate
```

#### Frontend

Go into the frontend folder from the project folder and run

```
yarn
```

### Running separately

The project has been configured to run in a docker container, so at this point you will have to run

```
make dev
```

in the root project folder.

## Assumptions

The *MAIN* assumption that I have made is in regards to how you call the adding experiment endpoint. I have designed the endpoints in GraphQL and they have been built with this structure.

```graphql
{
  active:         boolean,
  experimentName: string,
  customFields:   string
}
```

The assumption is in regards to the `customFields` field. I have assumed that it is a stringified array of objects. Eg.

```json
[
  {
    "name": "field1",
    "type": "single"
  },
  {
    "name": "field2",
    "type": "multi"
  },
  {
    "name": "field3",
    "type": "list",
    "options": ["option1", "option2"]
  }
]
```

The way the data is being held in the database is, 

```json
{
  "active": boolean,
  "experimentName": string,
  "customFields": [
    {
      "name": string,
      "type": string
    }...
  ]
}
```

I have provided an endpoint to add experiments. This can be accessed using the graphql playground [here](http://localhost/api/graphql).

The mutation for creating an experiment is:

```graphql
mutation {
  createExperiment(createExperimentInput: {
    active: true,
    customFields: "[{\"name\": \"something\", \"type\": \"single\"}]",
    experimentName: "someName"
  }) {
    active
  }
}
```

I have also provided an existing form available at the test route as http://localhost/test

I will assume that the options in the list are strings.

Types will be defined as:

- single
- multi
- list

## Additional features

- Adding a home page listing experiments
- Experiment adding/editing page
