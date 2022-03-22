# doorsteps-coding-challenge

This is a response to the Doorsteps coding challenge.

## How to run

So this app has been dockerized. The dockerfiles do run the installs.

Start the dev docker environment with

```
make dev
```

### Installing

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

Then go into the frontend folder from the project folder and run

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

I will assume that the options in the list are strings.

Types will be defined as:

- single
- multi
- list
