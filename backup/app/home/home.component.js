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
var index_1 = require('../common/index');
var HomeComponent = (function () {
    //constructor(canvas:canvas){}
    function HomeComponent(imageService) {
        this.imageService = imageService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getLastImages();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.myCanvas.nativeElement;
        this.url = 'ws://80.111.15.147:8080/';
        this.player = new JSMpeg.Player(this.url, { canvas: this.canvas, preserveDrawingBuffer: true });
    };
    HomeComponent.prototype.saveImage = function () {
        this.imageService.saveImage(this.myCanvas.nativeElement);
        this.getLastImages();
    };
    HomeComponent.prototype.getLastImages = function () {
        var _this = this;
        this.imageService.getLastImages().subscribe(function (data) {
            console.log(data);
            _this.lastImages = data;
        });
    };
    __decorate([
        core_1.ViewChild("_canvas"), 
        __metadata('design:type', core_1.ElementRef)
    ], HomeComponent.prototype, "myCanvas", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './app/home/home.component.html',
            //background-image: url("app/assets/images/video-page/white-background-stars.jpg")
            styles: ["\n\t\t\t\t\t\tcanvas{border-style: groove;width:100%}\n\t\t\t\t\t\t.saveBtnMenu{max-width: 8rem!important;}"]
        }), 
        __metadata('design:paramtypes', [index_1.SaveImageService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map