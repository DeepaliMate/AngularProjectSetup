import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUrl, userUrl } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private ip = "ec2-52-59-231-143";
  private _url: string = "http://" + this.ip + ".eu-central-1.compute.amazonaws.com:"
  private _urlEnd: string = ".eu-central-1.compute.amazonaws.com:"
  private _loginPort: string = "8090"
  private _userType = "/v1/auth/"
  constructor(private http: HttpClient) { }

  getLogin(userid, pass): any {

    console.log(loginUrl + (btoa(userid + '/' + pass)));
    console.log("___________________LoginCredential first___________________")

    return this.http.get(this._url + this._loginPort + this._userType + (btoa(userid + '/' + pass)), { responseType: 'text' });
  }

  getUserDetails(code) {
    console.log(userUrl + code);
    console.log("___________________Info Of LoginUsrUrl___________________");
    return this.http.get(this._url + "9090/v1/user/" + code);


  }
}

