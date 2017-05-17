import { Component, HostListener, ElementRef, OnInit, HostBinding } from '@angular/core';
import { AuthService } from './user/auth.service';
import { ColorSchemeService } from './common/index';
@Component({
    selector:'body',
    template:`<navbar-component (changeScheme)="changeScheme($event)" *ngIf="isAuthenticated()"></navbar-component>
              <router-outlet></router-outlet>`
})

export class BabycamAppComponent implements OnInit {
        ngOnInit(): void {
           // console.log("Debug: "+this.el.style.backgroundColor);
           // this.el.style.backgroundColor = "gray";
          // this.auth.isAuthenticatedOnServer();
        }
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
    this.bgColor = color;
  }

}