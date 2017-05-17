"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var babycam_app_component_1 = require('./babycam-app.component');
var navbar_component_1 = require('./nav/navbar.component');
var _404_component_1 = require('./errors/404.component');
var index_1 = require('./home/index');
var index_2 = require('./pictures/index');
var index_3 = require('./landing-page/index');
var settings_component_1 = require('./settings/settings.component');
//service
var auth_service_1 = require('./user/auth.service');
var index_4 = require('./common/index');
var routes_1 = require('./routes');
// declare let metro:Object;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule],
            declarations: [
                babycam_app_component_1.BabycamAppComponent,
                navbar_component_1.NavbarComponent,
                _404_component_1.Error404Component,
                index_1.HomeComponent,
                index_2.PicturesComponent,
                index_3.LandingPageComponent,
                index_4.SimpleModalComponent,
                settings_component_1.SettingsComponent,
                index_1.LastPicturesComponent,
                index_2.SortedPicturesComponent
            ],
            providers: [auth_service_1.AuthService, index_4.LoggedInGuard, index_4.FirstPageGuard, index_4.ColorSchemeService, index_4.NotifyService, index_4.SaveImageService,
                { provide: index_4.JQUERY_TOKEN, useValue: jQuery },
                { provide: index_4.MOMENT_TOKEN, useValue: moment }
            ],
            bootstrap: [babycam_app_component_1.BabycamAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map