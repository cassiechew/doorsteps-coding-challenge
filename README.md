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

Please include a README that describes how to run your app, as well as any assumptions
you have made.
