import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { SubjectStoreService } from "../../services/subject-store.service";
import { LoginService } from "src/services/login.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent {
  toggleSidebar() {}

  userData;
  // = {
  //   name: "Depali MATE",
  //   roleName: "Doctor",
  //   allowedModules: ["Agenda", "Patient", "Dashboard"],
  //   imgPath: null,
  //   uid: "27f95a39-e496-4e1d-9fd7-8b9460cb8a8d"
  // };
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private SubjectStoreService: SubjectStoreService,
    private loginService: LoginService
  ) {}
  ngOnInit(): void {
    this.loginService
      .getUserDetails(this.SubjectStoreService.secreteKey.value)
      .subscribe(data2 => {
        this.userData = data2;
      });
  }
}
//
