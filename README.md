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
