import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GemComponent } from './services/gem/gem.component';
import { HoroscopeComponent } from './services/horoscope/horoscope.component';
import { VastuComponent } from './services/vastu/vastu.component';
import { AppointmentComponent } from './appointment/appointment.component';


const userRoutes: Routes = [
  { path: 'user', component: UserComponent }
];

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gem', component: GemComponent},
  { path: 'horoscope', component: HoroscopeComponent},
  { path: 'vastu', component: VastuComponent},
];

const contactRoutes: Routes = [
  { path: 'contact', component: ContactComponent }
];

const appointmentRoutes: Routes = [
  { path: 'appointment', component: AppointmentComponent }
];

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/:token', component: LoginComponent }
];

const guestNavigationRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

const routes: Routes = [
  ...loginRoutes,
  ...guestNavigationRoutes,
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '', component: TemplateComponent,
    children: [
      ...userRoutes,
      ...homeRoutes,
      ...appointmentRoutes,
      ...contactRoutes
    ],
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
