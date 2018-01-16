import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';
import { AuthenticationService } from './../_services/authentication.service';
import { AuthGuard } from './../_guards/auth.guard';
import { AlertComponent } from './../_directives/alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppConfig } from './app.config';

import { AlertService } from './../_services/alert.service';
import { UserService } from './../_services/user.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }