# Django & React application

This is a set up so that we can easily create apps that use Django on the backend (and take advantage of the amazing admin UI) and React (set up with [`create-react-app`](https://npm.im/create-react-app)) for the front end application.

## Running

1. `docker-compose pull`
1. `docker-compose up`
1. There should now be two servers running:
  - [http://127.0.0.1:8000](http://127.0.0.1:8000) is the Django backend app
  - [http://127.0.0.1:3000](http://127.0.0.1:3000) is the React frontend app

## Using `docker-compose run` to issue one-off commands

If you want to run a one-off command, like installing dependencies, you can use the `docker-compose run <service_name> <cmd>`.

For example, to install a Javascript dependency and save that information to `package.json` we could run:
`docker-compose run --rm frontend npm install --save axios`

If you want to be on a shell for one of the Docker services, you can do something like:
`docker-compose run --rm frontend bash`
