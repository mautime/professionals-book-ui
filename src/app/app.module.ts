import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileSummaryComponent } from './pages/profile/summary/profile-summary.component';
import { ProfessionalComponent } from './pages/profile/professional/professional.component';
import { HobbiesComponent } from './pages/profile/hobbies/hobbies.component';
import { ProfessionalProfileService } from './services/professional-profile.service';

import { routesModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    ProfileSummaryComponent, 
    ProfessionalComponent, 
    HobbiesComponent
  ],
  imports: [
    BrowserModule, 
    NoopAnimationsModule, 
    HttpClientModule, 
    FlexLayoutModule, 
    MatButtonModule, 
    MDBBootstrapModule.forRoot(), 
    routesModule
  ],
  providers: [ProfessionalProfileService],
  bootstrap: [AppComponent], 
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
