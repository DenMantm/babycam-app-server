import { Component, OnChanges, Input } from '@angular/core';
import { SaveImageService } from '../../common/index';
@Component({
    selector:'last-pictures',
    templateUrl:'/app/home/last-pictures/last-pictures.component.html',
    styles:[`.border{ border-style: groove;}
    .preloader{margin-left:43%}`]
})

export class LastPicturesComponent{
        @Input() lastImages:Object[];
        timeoutVariable:number;
        constructor(private imageService:SaveImageService){}
        ngOnInit(){
            this.timeoutVariable = 1000;
            console.log('Debug Last Pictures');
            console.log(this.lastImages);
        }

        ngOnChanges(): void {
            //console.log(this.lastImages);
        }

    
}