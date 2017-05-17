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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var index_1 = require('../common/index');
var auth_service_1 = require('../user/auth.service');
var NavbarComponent = (function () {
    function NavbarComponent($, auth) {
        this.$ = $;
        this.auth = auth;
        this.colors = [];
        this.navbarColors = [];
        this.changeScheme = new core_1.EventEmitter();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.el = this.charm.nativeElement;
        var tmp;
        for (var i = 0; i < 20; i++) {
            tmp = this.getRandomColor();
            this.colors.push(tmp);
        }
        //getting current user
        this.currentUser = this.auth.getCurrentUser();
        console.log(this.currentUser);
        //colours for navbar
        this.navbarColors = [{ class: 'darcula',
                color: '#3c3f41' },
            { class: 'pink',
                color: '#dc4fad' },
            { class: 'navy',
                color: '#0072c6' },
            { class: 'red',
                color: '#ce352c' },
            { class: 'green',
                color: '#60a917' },
            { class: 'orange',
                color: '#fa6800' },
            { class: 'default',
                color: '#0072c6' }];
        //this.currentUser.appSettings.navbarColourScheme = this.navbarColors[0];
        this.changeColour(this.currentUser.appSettings.colourScheme);
        this.changeNavbarColour(this.currentUser.appSettings.navbarColourScheme);
    };
    NavbarComponent.prototype.showColourScheme = function () {
        var charm = this.$(this.el).data("charm");
        if (charm.element.data("opened") === true) {
            charm.close();
        }
        else {
            charm.open();
        }
    };
    NavbarComponent.prototype.changeColour = function (color) {
        this.changeScheme.emit(color);
        this.currentUser.appSettings.colourScheme = color;
        this.auth.changeUserSettings(this.currentUser).subscribe();
    };
    NavbarComponent.prototype.changeNavbarColour = function (color) {
        this.currentUser.appSettings.navbarColourScheme = color;
        this.auth.changeUserSettings(this.currentUser).subscribe();
    };
    NavbarComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent.prototype.showSettings = function () {
        this.$('#settings').modal();
    };
    __decorate([
        core_1.ViewChild('charm'), 
        __metadata('design:type', core_1.ElementRef)
    ], NavbarComponent.prototype, "charm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavbarComponent.prototype, "changeScheme", void 0);
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar-component',
            templateUrl: 'app/nav/navbar.component.html'
        }),
        __param(0, core_1.Inject(index_1.JQUERY_TOKEN)), 
        __metadata('design:paramtypes', [Object, auth_service_1.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map