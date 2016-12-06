# se1praktikum4angularjs2

## Installation & Verwendung

1. Aktuelles nodejs installieren: https://nodejs.org/
2. Angular commandline-Interface installieren: "npm install -g angular-cli"
3. In se1praktikum4angularjs2-Ordner ausführen: "npm install" (zum installieren der npm-Pakete für das Projekt)
4. Die Datei "Application.java" Ihrer SpringBoot-Applikation durch die "Application.java" aus dem TestApp-Ordner ersetzen (hinzugekommen ist der corsConfigurer()).
5. Die SpringBoot-Applikation in einem anderen Terminalfenster starten: "./gradlew bootRun"
6. Mit Postman (o.ä.) verifizieren, dass die ReST-Aufrufe funktionieren (GET und POST http://localhost:8080/customers etc.)
7. In dem se1praktikum4angularjs2-Ordner den Webserver starten: "ng serve"
8. In einem Browser die URL "http://localhost:4200" aufrufen. Dort läuft Ihre angularjs2-Webapplikation. Es wird die Liste der gespeicherten Customer angezeigt. In dem Textfeld kann ein neuer Customer hinzugefügt werden. Die Liste aktualisiert sich automatisch.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
