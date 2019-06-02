// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  apiUrl: 'https://newsapi.org/v2',
  apiKey: '509f79b74f834d889af127284e3825a1'
};

export const firebaseConfig = {
  apiKey: "AIzaSyBjU7-zZfonCT4DDCMSsL3gUv2VFcWYNC4",
  authDomain: "mobilproje-49d46.firebaseapp.com",
  databaseURL: "https://mobilproje-49d46.firebaseio.com",
  projectId: "mobilproje-49d46",
  storageBucket: "mobilproje-49d46.appspot.com",
  messagingSenderId: "381327104728",
  appId: "1:381327104728:web:b5a19de5cd654d47"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
