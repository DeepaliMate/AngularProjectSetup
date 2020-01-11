import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule ,
  MatDividerModule,
  MatGridListModule,
  MatSidenavModule,
  MatNavList,
  MatToolbarModule
  
   } from '@angular/material';
  
  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


const routes: Routes = [
  { path: 'nav', component: HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'home',component:NavigationComponent}
  


  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatGridListModule,
    MatSidenavModule,
     FormsModule,
     MatToolbarModule,
     LayoutModule,
     MatIconModule,
     MatListModule,
     
        ],
    exports: [
      RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
