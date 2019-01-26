import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AssetsComponent } from './assets/assets.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ReportIncidentComponent } from './report-incident/report-incident.component';


//route definitions 
const appRoutes: Routes = [
  { path: 'landing-page', component: LandingComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'make-payment', component: MakePaymentComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'payment-history', component: PaymentHistoryComponent},
    { path: 'assets', component: AssetsComponent },
    { path: 'incidents', component: IncidentsComponent, children: [
      { path: 'report-incidentt', component: ReportIncidentComponent }
    ] }
  ]},
  { path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  },
  { path: '**', component: LandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    PaymentHistoryComponent,
    AssetsComponent,
    IncidentsComponent,
    MakePaymentComponent,
    ReportIncidentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
