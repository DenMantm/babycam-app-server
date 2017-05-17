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
var router_1 = require('@angular/router');
var auth_service_1 = require('../user/auth.service');
var LoggedInGuard = (function () {
    function LoggedInGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        var _this = this;
        console.log("Running Service");
        if (!this.auth.isAuthenticated()) {
            return !!this.auth.isAuthenticatedOnServer().then(function (res) {
                if (res.id == undefined) {
                    _this.router.navigate(['landingPage']);
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        else
            return true;
        //return this.auth.isAuthenticated();
    };
    LoggedInGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
exports.LoggedInGuard = LoggedInGuard;
//# sourceMappingURL=guard-service.js.map