import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../user/user.model';
import { AuthService } from '../user/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifyService } from '../common/index';
@Component({
    selector:'settings-component',
    templateUrl:'/app/settings/settings.component.html',
    styles:[`label{color:gray}
    .text{width:100%!important}
    p{  color:black;
    }`]
})

export class SettingsComponent implements OnInit {

        currentUser:IUser;

        //User Settings Form
        settingsForm:FormGroup;
        userName:FormControl;
        firstName:FormControl; 
        lastName:FormControl;
        showUsername: boolean;
        showFirst: boolean;
        showLast: boolean;

        //Babby Settings Form
        babySettingsForm:FormGroup;
        babyName:FormControl;
        showBabyname:boolean;
        babyBirthDate:FormControl;
        showBabyBirthday:boolean;


        @Output() showColourScheme = new EventEmitter();
        constructor(private authService:AuthService,private notify:NotifyService){}

        ngOnInit(): void {
           this.currentUser = this.authService.currentUser;
        //settings form
        this.userName = new FormControl(this.currentUser.userName,Validators.required);
        this.firstName = new FormControl(this.currentUser.firstName,Validators.required); 
         this.lastName = new FormControl(this.currentUser.lastName,Validators.required); 
         this.settingsForm = new FormGroup({
           userName:this.userName,
           firstName:this.firstName, 
           lastName:this.lastName 
         })
         //baby settings form
         this.babyName = new FormControl(this.currentUser.babySettings.babyName,Validators.required);
         this.babyBirthDate = new FormControl(this.currentUser.babySettings.babyBirthDate,Validators.required);
          this.babySettingsForm = new FormGroup({
           babyName:this.babyName,
           babyBirthDate:this.babyBirthDate
         })
        }
        saveSettings(value){
            console.log(value);
            if(this.showUsername||this.showFirst||this.showLast){
            this.currentUser.userName = value.userName;
            this.currentUser.firstName = value.firstName;
            this.currentUser.lastName = value.lastName;

            this.authService.changeUserSettings(this.currentUser).subscribe(resp=>{
                    this.notify.saveSuccess("Saved","User Profile Information Succesfully saved")
            });



            this.showUsername=false;
            this.showFirst=false;
            this.showLast=false;
            }
                    else{
            this.notify.warning('Warning',"There was nothing to save!");
        }

        }
        saveBabySettings(value){

            if(this.showBabyname||this.showBabyBirthday){
                            console.log(value);
            this.currentUser.babySettings.babyBirthDate = value.babyBirthDate;
            this.currentUser.babySettings.babyName = value.babyName;

            //save new object to db here//
            this.authService.changeUserSettings(this.currentUser).subscribe(resp=>{
                console.log(resp);
            this.notify.saveSuccess("Saved","Baby Information Succesfully saved")
            });
            this.showBabyname=false;
            this.showBabyBirthday=false;

        }
        else{
            this.notify.warning('Warning',"There was nothing to save!");
        }


        }
        openColorCharm(){
                this.showColourScheme.emit();
        }
        changeAlwaysOnState(value){
            this.currentUser.appSettings.stayAlive = value;
            console.log(this.currentUser.appSettings.stayAlive);
            //save new object to db here//

            this.notify.saveSuccess("Saved","Always on state option Succesfully saved")
           // console.log("Always On State " +value);
        }

    
}