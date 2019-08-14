# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

Developed by Alen Isai Mendoza Hernández.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

also change var [assetsPath] in app.component.ts to `'../assets'`

## Build

Run `npm run-script build` to build the project.

also change var [assetsPath ] in app.component.ts to `'/test-app/assets'` for localhost 

## DATABASE - STORED DATA
You need have json server to consume the fake API

the db.json is in /assets/data/ directory

## Run JSON-SERVER
For installation and documentation on json-server, visit: https://www.npmjs.com/package/json-server

In any directory where your db.json is stored, execute the command:

`json-server --watch db.json`

## Run the project in his localhost
Once the previous process is finished, 

we must copy the `test-app` project folder located in `/test-app/dist`, to our localhost.

Example for linux: 

path of localhost: `/var/www/`

We start our server with the command `sudo service apache2 start`

Finally we open our browser and write the project path:

`http://localhost/test-app/`

And voila, our application will run on our localhost.
