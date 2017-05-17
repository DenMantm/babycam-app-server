import { Injectable,Inject } from '@angular/core';
import {JQUERY_TOKEN} from './jQuery.service';

@Injectable()
export class NotifyService{

constructor(@Inject(JQUERY_TOKEN) private $){

}
saveSuccess(title:string,body:string):void{
    this.$.Notify({
    caption: title,
    content: body,
    type: 'success',
    icon: "<span class='mif-floppy-disk'></span>"
});
}

success(title:string,body:string):void{
    this.$.Notify({
    caption: title,
    content: body,
    type: 'success'
});
}
warning(title:string,body:string):void{
    this.$.Notify({
    caption: title,
    content: body,
    type: 'warning'
});
}


    


}
