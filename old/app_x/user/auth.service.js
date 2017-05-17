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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
    }
    AuthService.prototype.isAuthenticated = function () {
        // console.log(new Error().stack);
        //   console.log("DEBUG HERE: "+!!this.currentUser);
        //    if(!!!this.currentUser){
        //         return !!this.isAuthenticatedOnServer().then(res=>{
        //         if(res.id == undefined){
        //           return false;
        //         }else{
        //           return true;
        //         }
        //     });
        //    }else{
        //        return true;
        //    }
        return !!this.currentUser;
    };
    AuthService.prototype.isAuthenticatedOnServer = function () {
        var _this = this;
        return this.http.get('/api/currentIdentity').map(function (response) {
            if (response._body) {
                _this.currentUser = response.json();
                return response.json();
            }
            else {
                return {};
            }
        }).toPromise();
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        //spin authentication here and if succesfull
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var loginInfo = { username: username, password: password };
        console.log(loginInfo);
        return this.http.post('/api/login', JSON.stringify(loginInfo), options).do(function (resp) {
            if (resp) {
                _this.currentUser = resp.json().user;
                _this.router.navigate(['/home']);
            }
        }).catch(function (error) {
            return Rx_1.Observable.of(false);
        });
        // this.currentUser = {id:1, 
        //             username:username,
        //             firstName:'Deniss' }
        //return true
    };
    AuthService.prototype.changeUserSettings = function (updatedUser) {
        //spin authentication here and if succesfull
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        //let loginInfo = {username:username,password:password};
        console.log(updatedUser);
        return this.http.post('/api/changeSettings', JSON.stringify(updatedUser), options).do(function (resp) {
            if (resp) {
            }
        }).catch(function (error) {
            return Rx_1.Observable.of(false);
        });
        // this.currentUser = {id:1, 
        //             username:username,
        //             firstName:'Deniss' }
        //return true
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http.get('/api/logout').do(function (resp) {
            if (resp) {
                _this.currentUser = null;
                _this.router.navigate(['/landingPage']);
            }
        }).subscribe();
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map