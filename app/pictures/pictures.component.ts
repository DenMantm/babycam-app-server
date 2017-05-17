import {Component} from '@angular/core';

@Component({
    templateUrl:'./app/pictures/pictures.component.html',
    styles:[`.background{
						-webkit-box-shadow: 0px 7px 20px 11px rgba(0,0,0,0.75);
						-moz-box-shadow: 0px 7px 20px 11px rgba(0,0,0,0.75);
						box-shadow: 0px 7px 20px 11px rgba(0,0,0,0.75);
						background-color:white;
						height:100%;}
						
				#history-item-container {
					box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
					background: #fff;
					border-radius: 2px;
				}
				.background-white-container{color:black!important;
					box-shadow: var(--shadow-elevation-2dp_-_box-shadow);
					background: #fff;
					border-radius: 2px;}
						`]
})

export class PicturesComponent {
	condition:string;
	ngOnInit(){
		this.condition = "days";
	}
}