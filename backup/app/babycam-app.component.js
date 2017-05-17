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
var auth_service_1 = require('./user/auth.service');
var index_1 = require('./common/index');
var BabycamAppComponent = (function () {
    function BabycamAppComponent(auth, ref, scheme) {
        this.auth = auth;
        this.ref = ref;
        this.scheme = scheme;
        this.el = ref.nativeElement;
        this.bgColor = '#71b1d1';
    }
    BabycamAppComponent.prototype.ngOnInit = function () {
        // console.log("Debug: "+this.el.style.backgroundColor);
        // this.el.style.backgroundColor = "gray";
        // this.auth.isAuthenticatedOnServer();
    };
    BabycamAppComponent.prototype.isAuthenticated = function () {
        return this.auth.isAuthenticated();
    };
    BabycamAppComponent.prototype.changeScheme = function (color) {
        console.log('setColor: ' + color);
        //console.log(this.el.nativeElement.style);
        this.bgColor = color;
    };
    __decorate([
        core_1.HostBinding('style.background-color'), 
        __metadata('design:type', Object)
    ], BabycamAppComponent.prototype, "bgColor", void 0);
    BabycamAppComponent = __decorate([
        core_1.Component({
            selector: 'body',
            template: "<navbar-component (changeScheme)=\"changeScheme($event)\" *ngIf=\"isAuthenticated()\"></navbar-component>\n              <router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, core_1.ElementRef, index_1.ColorSchemeService])
    ], BabycamAppComponent);
    return BabycamAppComponent;
}());
exports.BabycamAppComponent = BabycamAppComponent;
//# sourceMappingURL=babycam-app.component.js.map