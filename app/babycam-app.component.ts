import { Component, HostListener, ElementRef, HostBinding,enableProdMode } from '@angular/core';
import { AuthService } from './user/auth.service';
import { ColorSchemeService } from './common/index';

//enableProdMode();

@Component({
    selector:'body',
    template:`<navbar-component (changeScheme)="changeScheme($event)" *ngIf="isAuthenticated()"></navbar-component>
              <router-outlet></router-outlet>`
})

export class BabycamAppComponent {
         
         
@HostBinding('style.background-color')
bgColor;
el: ElementRef;
constructor(private auth:AuthService,
            private ref:ElementRef,
            private scheme:ColorSchemeService){
                this.el = ref.nativeElement;
                  this.bgColor = '#71b1d1';

}

isAuthenticated(){
    return this.auth.isAuthenticated();
}
  changeScheme(color){
      console.log( 'setColor: '+color)
      //console.log(this.el.nativeElement.style);
    
   console.log('CHHHHHAAANNG!');
    this.bgColor = color;
  }

}