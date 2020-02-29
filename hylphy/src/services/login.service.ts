import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { loginUrl, userUrl } from "./../environments/environment";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private ip = "ec2-3-122-227-53";
  private _url: string =
    "http://" + this.ip + ".eu-central-1.compute.amazonaws.com:";
  private _urlEnd: string = ".eu-central-1.compute.amazonaws.com:";
  private _loginPort: string = "8090";
  private _userType = "/v1/auth/";
  constructor(private http: HttpClient) {}

  getLogin(userid, pass): any {
    console.log(loginUrl + btoa(userid + "/" + pass));
    return this.http.get(loginUrl + btoa(userid + "/" + pass), {
      responseType: "text"
    });
  }

  getUserDetails(code) {
    console.log(userUrl + code);
    console.log("___________________Info Of LoginUsrUrlsss___________________");
    return this.http.get(userUrl + code);
  }
}
