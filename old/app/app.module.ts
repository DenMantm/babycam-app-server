import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { BabycamAppComponent} from './babycam-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { HomeComponent,LastPicturesComponent } from './home/index';
import { PicturesComponent, SortedPicturesComponent } from './pictures/index';
import { LandingPageComponent } from './landing-page/index';

import { SettingsComponent } from './settings/settings.component';


//service
import { AuthService } from './user/auth.service';

import { LoggedInGuard, 
        ColorSchemeService,
        NotifyService,
        JQUERY_TOKEN,
        MOMENT_TOKEN,
        SimpleModalComponent, FirstPageGuard, SaveImageService
         } from './common/index';

import { appRoutes } from './routes'

declare let jQuery:Object;
declare let moment:Object;
// declare let metro:Object;

@NgModule({
    imports:[BrowserModule,
            RouterModule.forRoot(appRoutes),           
            FormsModule,
            ReactiveFormsModule,
            HttpModule],
    declarations:[
                    BabycamAppComponent,
                    NavbarComponent,
                    Error404Component,
                    HomeComponent,
                    PicturesComponent,
                    LandingPageComponent,
                    SimpleModalComponent,
                    SettingsComponent,
                    LastPicturesComponent,
                    SortedPicturesComponent
                    ],
    providers: [AuthService,LoggedInGuard,FirstPageGuard,ColorSchemeService,NotifyService,SaveImageService,
    {provide:JQUERY_TOKEN,useValue:jQuery},
    {provide:MOMENT_TOKEN,useValue:moment}
    ],
    bootstrap:[BabycamAppComponent]
})

export class AppModule {
    
}