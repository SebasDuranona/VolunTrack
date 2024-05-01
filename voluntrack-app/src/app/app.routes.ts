import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginOrgComponent } from './auth/components/login-org/login-org.component';
import { OrgDashComponent } from './modules/org/components/org-dash/org-dash.component';
import { VolunteerDashComponent } from './modules/volunteer/components/volunteer-dash/volunteer-dash.component';
import { SignupOrgComponent } from './auth/components/signup-org/signup-org.component';


export const routes: Routes = [
    { path:"login", component:LoginComponent },
    { path:"register", component:SignupComponent },
    { path:"Orgregister", component:SignupOrgComponent},
    { path:"Orglogin", component:LoginOrgComponent},
    { path:"organization", component:OrgDashComponent},
    { path:"volunteer", component:VolunteerDashComponent},
];
