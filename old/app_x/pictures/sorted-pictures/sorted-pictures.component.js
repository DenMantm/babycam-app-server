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
var index_1 = require('../../common/index');
var SortedPicturesComponent = (function () {
    function SortedPicturesComponent(imageService, moment, notify, $) {
        this.imageService = imageService;
        this.moment = moment;
        this.notify = notify;
        this.$ = $;
        this.birthDate = new Date('2012-01-01');
    }
    SortedPicturesComponent.prototype.ngOnChanges = function () {
        var _this = this;
        //logic to stop loading data from database on each change
        if (this.sortedImageObject === undefined) {
            this.imageService.getAllImages().subscribe(function (res) {
                _this.allImages = res;
                _this.sortArrayBy(_this.condition);
                if (_this.condition == "days") {
                    _this.titlePrefix = "Day ";
                }
                else if (_this.condition == "weeks") {
                    _this.titlePrefix = "Week ";
                }
                else if (_this.condition == "months") {
                    _this.titlePrefix = "Months ";
                }
                else {
                    _this.titlePrefix = "Have Passed ";
                }
            });
        }
        else {
            this.sortArrayBy(this.condition);
            if (this.condition == "days") {
                this.titlePrefix = "Day ";
            }
            else if (this.condition == "weeks") {
                this.titlePrefix = "Week ";
            }
            else if (this.condition == "months") {
                this.titlePrefix = "Months ";
            }
            else {
                this.titlePrefix = "Have Passed ";
            }
        }
    };
    SortedPicturesComponent.prototype.removeImage = function (image) {
        this.selectImage = image;
        this.$('#DeleteImage').modal();
    };
    SortedPicturesComponent.prototype.deleteSelected = function () {
        //removing from main collection
        for (var i = 0; i < this.allImages.length; i++) {
            if (this.selectImage._id === this.allImages[i]._id) {
                this.allImages.splice(i, 1);
                console.log(this.allImages.length);
                break;
            }
        }
        //removing from sorted collection
        for (var i = 0; i < this.sortedImageObject.length; i++) {
            for (var g = 0; g < this.sortedImageObject[i].images.length; g++) {
                if (this.selectImage._id === this.sortedImageObject[i].images[g]._id) {
                    this.sortedImageObject[i].images.splice(g, 1);
                    break;
                }
            }
        }
        this.notify.success("Removed Succesfully", "Image heve been removed succesfully!");
        //Open question dialog here
        this.imageService.removeImage(this.selectImage).subscribe(function (resp) {
            console.log(resp);
            //remove image from the array ->
        });
    };
    SortedPicturesComponent.prototype.sortArrayBy = function (condition) {
        var _this = this;
        var Passed;
        this.sortedImageObject = [];
        var tmpObj = {};
        this.allImages.forEach(function (item) {
            var imageTakken = _this.moment().diff(item.imageDate, condition);
            var birthDate = _this.moment().diff(_this.birthDate, condition);
            console.log(birthDate - imageTakken);
            Passed = birthDate - imageTakken;
            if (tmpObj[Passed] == undefined) {
                tmpObj[Passed] = [];
                tmpObj[Passed].push(item);
            }
            else {
                tmpObj[Passed].push(item);
            }
        });
        for (var key in tmpObj) {
            // skip loop if the property is from prototype
            if (!tmpObj.hasOwnProperty(key))
                continue;
            var obj = tmpObj[key];
            var tmpObject = { group: key,
                images: obj,
                hidden: true };
            this.sortedImageObject.push(tmpObject);
        }
        //console.log(Passed);
        console.log(this.sortedImageObject);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SortedPicturesComponent.prototype, "condition", void 0);
    SortedPicturesComponent = __decorate([
        core_1.Component({
            selector: 'sorted-pictures',
            templateUrl: './app/pictures/sorted-pictures/sorted-pictures.component.html',
            styles: [".hideThis{display:none}\n            .picture-style{\n                width: 100%; \n            }\n            .cont-style{\n          border-radius: 5px;\n          margin-top:10px;\n            }"]
        }),
        __param(1, core_1.Inject(index_1.MOMENT_TOKEN)),
        __param(3, core_1.Inject(index_1.JQUERY_TOKEN)), 
        __metadata('design:paramtypes', [index_1.SaveImageService, Object, index_1.NotifyService, Object])
    ], SortedPicturesComponent);
    return SortedPicturesComponent;
}());
exports.SortedPicturesComponent = SortedPicturesComponent;
//# sourceMappingURL=sorted-pictures.component.js.map