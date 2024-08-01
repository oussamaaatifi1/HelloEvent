import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AuthenticateAdminComponent } from './authenticate-admin/authenticate-admin.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    RegisterAdminComponent,
    AuthenticateAdminComponent,
    AuthenticateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
