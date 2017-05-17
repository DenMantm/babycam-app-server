import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    template:`
    <div #mymodal id="{{modalId}}" class="modal fade block-shadow animated flipInX" tabindex="-1">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
       <div class="window">
       <div class="window-caption bg-blue fg-white">
        <span class="window-caption-icon"><span class="mif-windows"></span></span>
        <span class="window-caption-title">{{title}}</span>
        <span class="btn-close" data-dismiss="modal"></span>
        </div>
        <div class="window-content" >
                <ng-content></ng-content>
        </div>
        </div>
    </div>

  </div>
</div>
    `,
    styles:[`
    .modal-body {height:250px; overflow-y:scroll;}
    `]
})
export class SimpleModalComponent{
    @Input() title:string;
    @Input() modalId:string;
    @ViewChild('mymodal') div:ElementRef;
    
    constructor(@Inject(JQUERY_TOKEN) private $:any){}
    
    closeModal(){
        console.log('Triggered');
        this.$(this.div.nativeElement).modal('hide');
    }
}