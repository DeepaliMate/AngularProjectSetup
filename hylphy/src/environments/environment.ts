// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  ip: "ec2-54-93-165-224",
  production: false,
  version: "v1"
};
const _urlEnd: string = ".eu-central-1.compute.amazonaws.com:";

//--------------------------------------------------LOGIN
const _loginPort: string = "8090";
const _loginType: string = "auth";
export const loginUrl: string =
  "http://" +
  environment.ip +
  _urlEnd +
  _loginPort +
  "/" +
  environment.version +
  "/" +
  _loginType +
  "/";

//--------------------------------------------------USER
const _lUserPort: string = "9090";
const _loginUserType: string = "user";
export const userUrl: string =
  "http://" +
  environment.ip +
  _urlEnd +
  _lUserPort +
  "/" +
  environment.version +
  "/" +
  _loginUserType +
  "/";

//--------------------------------------------------LIST OF PATIENT
const _listPatientPort: string = "9091";
const _listPatientType: string = "patient";
export const patientListUrl: string =
  "http://" +
  environment.ip +
  _urlEnd +
  _listPatientPort +
  "/" +
  environment.version +
  "/" +
  _listPatientType +
  "/";
