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
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
var index_1 = require('./index');
var SaveImageService = (function () {
    function SaveImageService(auth, http, notify) {
        this.auth = auth;
        this.http = http;
        this.notify = notify;
    }
    SaveImageService.prototype.ngOnInit = function () {
        //return this.auth.isAuthenticated();
    };
    SaveImageService.prototype.removeImage = function (image) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/deleteCanvasImage', JSON.stringify(image), options).do(function (resp) {
            if (resp) {
            }
        }).catch(function (error) {
            return Rx_1.Observable.of(false);
        });
    };
    SaveImageService.prototype.saveImage = function (canvas) {
        var _this = this;
        var image = canvas.toDataURL("image/png");
        console.log("debug2" + image);
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        var formData = new FormData();
        var newImageAttributes = this.imageObjectWithAttributes();
        formData.append("canvImage", image);
        formData.append("canvImageAttributes", JSON.stringify(newImageAttributes));
        this.http.post('/api/saveCanvasImage', formData)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            console.log('response', data.fileName);
            data.status ?
                _this.notify.success('Image Saved', "Images have been succesfully saved!") :
                _this.notify.warning('Image Not Saved', "Something went wrong on server side!");
        });
        // this.http.post('/api/saveCanvasImage',formData,options).do(
        //     resp =>{
        //         console.log('Data was posted');
        //     }
        // ).catch(error =>{
        //         return Observable.of(false)
        //     }).subscribe();
    };
    SaveImageService.prototype.getLastImages = function () {
        return this.http.get('/api/getLastImages').map(function (resp) { return resp.json(); });
    };
    //assembling object with attributes of the image
    SaveImageService.prototype.imageObjectWithAttributes = function () {
        var newImage = { imageUrl: '',
            imageDate: Date(),
            madeBy: this.auth.currentUser.userName,
            favourite: false,
            title: 'Baby Image ' + Date(),
            comment: '' };
        return newImage;
    };
    SaveImageService.prototype.getAllImages = function () {
        return this.http.get('/api/getAllImages').map(function (resp) { return resp.json(); });
    };
    SaveImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, http_1.Http, index_1.NotifyService])
    ], SaveImageService);
    return SaveImageService;
}());
exports.SaveImageService = SaveImageService;
//# sourceMappingURL=save-image.service.js.map