
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) { }
  username: string;
  password: string;
  employee;
  flag: boolean = false;
  ngOnInit() {
    document.body.className = "selector-login-backg";
  }
  login(): void {

    this.loginService.getLogin(this.username, this.password).subscribe((data) => {
      console.log("fnidjndsjn");
      console.log(JSON.parse(data));
      if(data!=""){
        this.router.navigate(["home"]);
      }
      else {
         alert("Invalid credentials");
       }
      // this.employee = data
    });
    //   this.flag = true;

    //   if (this.username == 'admin' && this.password == 'admin') {
    //     this.flag = false;
    //     this.router.navigate(["home"]);
    //   } else {
    //     alert("Invalid credentials");
    //   }
  }
  ngOnDestroy() {
    document.body.className = "";
  }
}
