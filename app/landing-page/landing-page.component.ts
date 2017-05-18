import { Component, HostListener, OnInit, ElementRef, Renderer, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';
import { ColorSchemeService } from '../common/index';


@Component({
    templateUrl:'app/landing-page/landing-page.component.html',
    styleUrls:['app/landing-page/landing-page.component.css']
})


export class LandingPageComponent implements OnInit {

dynamicBannerBackground:string;
dynamicMarginTop:string;
dynamicOpacity:number;
loginWindow:boolean;
loginForm:FormGroup;
username:FormControl;
password:FormControl;
user:IUser;
el: ElementRef;
validLogin:boolean;

constructor(private auth:AuthService,
private scheme:ColorSchemeService,
el: ElementRef){
    this.el = el;
}

//form
ngOnInit(){
    this.validLogin = true;
    this.username = new FormControl('',Validators.required)
    this.password = new FormControl('',Validators.required)
    this.loginForm = new FormGroup({
        username:this.username,
        password:this.password
    })
}
  ngAfterViewInit() {
    const hostElem = this.el.nativeElement;
    //console.log(hostElem.children);
    //console.log(hostElem.parentNode);
  }

@HostListener("window:scroll", ['$event'])
onWindowScroll(event) {
   let scrollPos = document.body.scrollTop;
 //get current scroll position
      //console.debug("Scroll Event", document.body.scrollTop);
      // see András Szepesházi's comment below
      //console.debug("Scroll Event", window.pageYOffset );
      this.dynamicBannerBackground = '50% ' + (-scrollPos/4)+"px";
      this.dynamicMarginTop = (scrollPos/4)+"px";
      this.dynamicOpacity =  1-(scrollPos/250);
}
login(value){
    // this.auth.login(value.username,value.password).subscribe(resp =>{
    //         if(!resp){
    //     console.log('Failed to login');
    //     this.validLogin = false;
    // }
    
    
    this.auth.login(value.username,value.password).subscribe(resp => {
                    if(resp.json().status == 'failed'){
                        this.validLogin = false;
                    }

    })
    
    
 

    
}
   // });
    //console.log(response);

}

	
