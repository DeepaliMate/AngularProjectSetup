

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { LoginService } from './../services/login.service';
import { PatientListService } from './../services/patient-list.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserCardComponent } from './home/user-card/user-card.component';
import { MsgCardComponent } from './home/msg-card/msg-card.component';
import { NewPatientComponent } from './home/new-patient/new-patient.component';
import { HttpClientModule } from '@angular/common/http';






const routes: Routes = [
  // { path: '**', redirectTo: 'login' },
  { path: 'nav', component: NavigationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, data: {} },
  { path: 'newUser', component: NewPatientComponent },



];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    UserCardComponent,
    MsgCardComponent,
    NewPatientComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    FormsModule,
    LayoutModule,
    AngularMaterialModule,
    HttpClientModule,

  ],
  exports: [
    RouterModule
  ],
  providers: [LoginService, PatientListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
