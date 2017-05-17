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
var jQuery_service_1 = require('./jQuery.service');
var NotifyService = (function () {
    function NotifyService($) {
        this.$ = $;
    }
    NotifyService.prototype.saveSuccess = function (title, body) {
        this.$.Notify({
            caption: title,
            content: body,
            type: 'success',
            icon: "<span class='mif-floppy-disk'></span>"
        });
    };
    NotifyService.prototype.success = function (title, body) {
        this.$.Notify({
            caption: title,
            content: body,
            type: 'success'
        });
    };
    NotifyService.prototype.warning = function (title, body) {
        this.$.Notify({
            caption: title,
            content: body,
            type: 'warning'
        });
    };
    NotifyService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(jQuery_service_1.JQUERY_TOKEN)), 
        __metadata('design:paramtypes', [Object])
    ], NotifyService);
    return NotifyService;
}());
exports.NotifyService = NotifyService;
//# sourceMappingURL=notify.service.js.map