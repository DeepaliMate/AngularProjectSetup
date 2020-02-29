import { SubjectStoreService } from "./subject-store.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { patientListUrl } from "./../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PatientListService {
  private ip = "ec2-52-59-231-143";
  private _url: string =
    "http://" + this.ip + ".eu-central-1.compute.amazonaws.com:";
  private _port = "9091";
  private _userType = "/v1/patient/";

  constructor(
    private htttp: HttpClient,
    private SubjectStoreService: SubjectStoreService
  ) {}
  getPatientList(): any {
    console.log(
      patientListUrl + this.SubjectStoreService.secreteKey.value + "/pRDV"
    );
    console.log(
      "___________________Info Of List Of Patients___________________"
    );
    return this.htttp.get(
      patientListUrl + this.SubjectStoreService.secreteKey.value + "/pRDV"
    );
  }
}
