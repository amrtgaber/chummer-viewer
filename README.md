# Chummer Viewer

[![Build Status](https://travis-ci.org/amrtgaber/chummer-viewer.svg?branch=master)](https://travis-ci.org/amrtgaber/chummer-viewer) [![Coverage Status](https://coveralls.io/repos/github/amrtgaber/chummer-viewer/badge.svg?branch=master)](https://coveralls.io/github/amrtgaber/chummer-viewer?branch=master) [![Dependency Status](https://gemnasium.com/badges/github.com/amrtgaber/chummer-viewer.svg)](https://gemnasium.com/github.com/amrtgaber/chummer-viewer) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The goal of this project is to create a simple web app to view [chummer5a](https://github.com/chummer5a/chummer5a) character files. Currently a work in progress.

## Table of Contents

* [Getting Started](#getting-started)
  * [Docker (Recommended)](#docker)
  * [Locally](#locally)
* [See it in action](#see-it-in-action)
* [Installing Dependencies](#installing-dependencies)
  * [Production](#production)
  * [Development](#development)
* [Angular CLI](#angular-cli)

## Getting Started

### Docker

To start the application run `docker-compose up`.

To stop the application run `docker-compose down` in a separate terminal.

If you intend on adding any dependencies you should also run `npm install`.

### Locally

1. Run `npm install`
2. Run `npm start`

Stop the application with `ctrl + c`.

## See it in Action

Navigate to `localhost:4200` in your browser.

**NOTE**: For docker toolbox you must replace 'localhost' with the machine ip. You can get the machine ip with the following command.

`docker-machine ip chummer-viewer`

## Installing Dependencies

### Production

1. Stop the application
2. Run `npm install --save <dependency>`
3. Start the application again

### Development

1. Stop the application
2. Run `npm install --save-dev <dependency>`
3. Start the application again

## Angular CLI
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
