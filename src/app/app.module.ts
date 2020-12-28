import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HoroscopeComponent } from './services/horoscope/horoscope.component';
import { VastuComponent } from './services/vastu/vastu.component';
import { GemComponent } from './services/gem/gem.component';
import { AngularFireModule }  from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCKl7NCyuX5GlXRDwsIIY7__X1l0dkhYGs",
  authDomain: "astrologyservices-58.firebaseapp.com",
  databaseURL: "https://astrologyservices-58.firebaseio.com",
  projectId: "astrologyservices-58",
  storageBucket: "astrologyservices-58.appspot.com",
  messagingSenderId: "366312416782",
  appId: "1:366312416782:web:b52b26be5096a10b1fbe5f",
  measurementId: "G-750WE906W5"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TemplateComponent,
    UserComponent,
    HomeComponent,
    AppointmentComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    HoroscopeComponent,
    VastuComponent,
    GemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
