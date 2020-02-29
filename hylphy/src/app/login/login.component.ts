import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "../../services/login.service";
import { SubjectStoreService } from "../../services/subject-store.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private SubjectStoreService: SubjectStoreService
  ) {}
  username: string;
  password: string;
  employee;
  flag: boolean = false;
  ngOnInit() {
    document.body.className = "selector-login-backg";
  }
  login(): void {
    this.loginService
      .getLogin(this.username, this.password)
      .subscribe(secreteKey => {
        if (secreteKey) {
          console.log("code", secreteKey);
          this.SubjectStoreService.secreteKey.next(secreteKey);
          this.loginService.getUserDetails(secreteKey).subscribe(data2 => {
            console.log("data2", data2);
            this.SubjectStoreService.profileObs.next(data2);
            this.router.navigate(["home"]);
          });
        } else {
          alert("Invalid credentials");
        }

        this.loginService
          .getLogin(this.username, this.password)
          .subscribe(data => {
            console.log("fnidjndsjn");

            if (data != "") {
              this.router.navigate(["home"]);
            } else {
              alert("Invalid credentials");
            }
            // this.employee = data
          });
      });
  }
}
