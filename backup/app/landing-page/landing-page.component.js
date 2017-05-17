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
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../user/auth.service');
var index_1 = require('../common/index');
var LandingPageComponent = (function () {
    function LandingPageComponent(auth, scheme, el) {
        this.auth = auth;
        this.scheme = scheme;
        this.el = el;
    }
    //form
    LandingPageComponent.prototype.ngOnInit = function () {
        this.validLogin = true;
        this.username = new forms_1.FormControl('', forms_1.Validators.required);
        this.password = new forms_1.FormControl('', forms_1.Validators.required);
        this.loginForm = new forms_1.FormGroup({
            username: this.username,
            password: this.password
        });
    };
    LandingPageComponent.prototype.ngAfterViewInit = function () {
        var hostElem = this.el.nativeElement;
        //console.log(hostElem.children);
        //console.log(hostElem.parentNode);
    };
    LandingPageComponent.prototype.onWindowScroll = function (event) {
        var scrollPos = document.body.scrollTop;
        //get current scroll position
        //console.debug("Scroll Event", document.body.scrollTop);
        // see András Szepesházi's comment below
        //console.debug("Scroll Event", window.pageYOffset );
        this.dynamicBannerBackground = '50% ' + (-scrollPos / 4) + "px";
        this.dynamicMarginTop = (scrollPos / 4) + "px";
        this.dynamicOpacity = 1 - (scrollPos / 250);
    };
    LandingPageComponent.prototype.login = function (value) {
        var _this = this;
        this.auth.login(value.username, value.password).subscribe(function (resp) {
            if (!resp) {
                console.log('Failed to login');
                _this.validLogin = false;
            }
        });
        //console.log(response);
    };
    __decorate([
        core_1.HostListener("window:scroll", ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], LandingPageComponent.prototype, "onWindowScroll", null);
    LandingPageComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/landing-page/landing-page.component.html',
            styleUrls: ['app/landing-page/landing-page.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, index_1.ColorSchemeService, core_1.ElementRef])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;
//# sourceMappingURL=landing-page.component.js.map