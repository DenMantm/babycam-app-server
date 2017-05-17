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
var SimpleModalComponent = (function () {
    function SimpleModalComponent($) {
        this.$ = $;
    }
    SimpleModalComponent.prototype.closeModal = function () {
        console.log('Triggered');
        this.$(this.div.nativeElement).modal('hide');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SimpleModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SimpleModalComponent.prototype, "modalId", void 0);
    __decorate([
        core_1.ViewChild('mymodal'), 
        __metadata('design:type', core_1.ElementRef)
    ], SimpleModalComponent.prototype, "div", void 0);
    SimpleModalComponent = __decorate([
        core_1.Component({
            selector: 'simple-modal',
            template: "\n    <div #mymodal id=\"{{modalId}}\" class=\"modal fade block-shadow animated flipInX\" tabindex=\"-1\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n       <div class=\"window\">\n       <div class=\"window-caption bg-blue fg-white\">\n        <span class=\"window-caption-icon\"><span class=\"mif-windows\"></span></span>\n        <span class=\"window-caption-title\">{{title}}</span>\n        <span class=\"btn-close\" data-dismiss=\"modal\"></span>\n        </div>\n        <div class=\"window-content\" >\n                <ng-content></ng-content>\n        </div>\n        </div>\n    </div>\n\n  </div>\n</div>\n    ",
            styles: ["\n    .modal-body {height:250px; overflow-y:scroll;}\n    "]
        }),
        __param(0, core_1.Inject(jQuery_service_1.JQUERY_TOKEN)), 
        __metadata('design:paramtypes', [Object])
    ], SimpleModalComponent);
    return SimpleModalComponent;
}());
exports.SimpleModalComponent = SimpleModalComponent;
//# sourceMappingURL=simple-modal.component.js.map