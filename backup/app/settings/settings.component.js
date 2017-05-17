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
var auth_service_1 = require('../user/auth.service');
var forms_1 = require('@angular/forms');
var index_1 = require('../common/index');
var SettingsComponent = (function () {
    function SettingsComponent(authService, notify) {
        this.authService = authService;
        this.notify = notify;
        this.showColourScheme = new core_1.EventEmitter();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.currentUser;
        //settings form
        this.userName = new forms_1.FormControl(this.currentUser.userName, forms_1.Validators.required);
        this.firstName = new forms_1.FormControl(this.currentUser.firstName, forms_1.Validators.required);
        this.lastName = new forms_1.FormControl(this.currentUser.lastName, forms_1.Validators.required);
        this.settingsForm = new forms_1.FormGroup({
            userName: this.userName,
            firstName: this.firstName,
            lastName: this.lastName
        });
        //baby settings form
        this.babyName = new forms_1.FormControl(this.currentUser.babySettings.babyName, forms_1.Validators.required);
        this.babyBirthDate = new forms_1.FormControl(this.currentUser.babySettings.babyBirthDate, forms_1.Validators.required);
        this.babySettingsForm = new forms_1.FormGroup({
            babyName: this.babyName,
            babyBirthDate: this.babyBirthDate
        });
    };
    SettingsComponent.prototype.saveSettings = function (value) {
        var _this = this;
        console.log(value);
        if (this.showUsername || this.showFirst || this.showLast) {
            this.currentUser.userName = value.userName;
            this.currentUser.firstName = value.firstName;
            this.currentUser.lastName = value.lastName;
            this.authService.changeUserSettings(this.currentUser).subscribe(function (resp) {
                _this.notify.saveSuccess("Saved", "User Profile Information Succesfully saved");
            });
            this.showUsername = false;
            this.showFirst = false;
            this.showLast = false;
        }
        else {
            this.notify.warning('Warning', "There was nothing to save!");
        }
    };
    SettingsComponent.prototype.saveBabySettings = function (value) {
        var _this = this;
        if (this.showBabyname || this.showBabyBirthday) {
            console.log(value);
            this.currentUser.babySettings.babyBirthDate = value.babyBirthDate;
            this.currentUser.babySettings.babyName = value.babyName;
            //save new object to db here//
            this.authService.changeUserSettings(this.currentUser).subscribe(function (resp) {
                console.log(resp);
                _this.notify.saveSuccess("Saved", "Baby Information Succesfully saved");
            });
            this.showBabyname = false;
            this.showBabyBirthday = false;
        }
        else {
            this.notify.warning('Warning', "There was nothing to save!");
        }
    };
    SettingsComponent.prototype.openColorCharm = function () {
        this.showColourScheme.emit();
    };
    SettingsComponent.prototype.changeAlwaysOnState = function (value) {
        this.currentUser.appSettings.stayAlive = value;
        console.log(this.currentUser.appSettings.stayAlive);
        //save new object to db here//
        this.notify.saveSuccess("Saved", "Always on state option Succesfully saved");
        // console.log("Always On State " +value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SettingsComponent.prototype, "showColourScheme", void 0);
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'settings-component',
            templateUrl: '/app/settings/settings.component.html',
            styles: ["label{color:gray}\n    .text{width:100%!important}\n    p{  color:black;\n    }"]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, index_1.NotifyService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map