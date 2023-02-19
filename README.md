## TaskBoard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## TaskBoard Solutioning Detail

1. The project is being done with Angular and for responsiveness I have used Flexbox. Hence tried to use minimal libraries as much as possible.
2. Based on the API response there is one property called "completed" which I assume identifies the completeness of the list. So while coding I have utilized the same boolean property to display the list either in the To Do Section or in the I Did It Section.
3. Based on the API response, the result set was returning with default limit as 30 and total count as 150. So I have used the limit parameter in http params along with the API URL to set a limit in the code. I have currently set the limit as 10 in my component. However, this can be done without setting any limit as well or we can increase/decrease the limit in the code.

## To Run the TaskBoard Application

Steps to proceed

1. Download node.js
2. Run `npm install -g @angular/cli `
3. Go to project folder `Task_Board-develop` and Run `npm install` or `npm i`
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
