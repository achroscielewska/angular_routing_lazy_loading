# PetReminders

Description TO_DO

## Libraries
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

* [Angular Material](https://material.angular.io/)

## Angular Material
In `app/modules/shared` angular-material.imports.ts was added with shared angular material imports.

## Style
Media configuration

In `app/utilities` file _variables.scss
```scss
$break-small: 576px;
$break-medium: 768px;
$break-large: 960px;
$break-extra-large: 1200px;
```

In styles.scss
```scss
@media (min-width: $break-small) {}
@media (min-width: $break-medium) {}
@media (min-width: $break-large) {}
@media (min-width: $break-extra-large) {}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
