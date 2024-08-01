import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
// import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AuthenticateAdminComponent } from './authenticate-admin/authenticate-admin.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HomeComponent } from './home/home.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AuthenticateComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'admin/register', component: RegisterAdminComponent },
  { path: 'admin/login', component: AuthenticateAdminComponent },
  { path: 'user/dashboard', component: DashboardUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
