import {Component, ViewChild, ElementRef, AfterViewInit,OnInit} from '@angular/core';
import { SaveImageService } from '../common/index';

declare let JSMpeg:any;

@Component({
    templateUrl:'./app/home/home.component.html',
		//background-image: url("app/assets/images/video-page/white-background-stars.jpg")
		styles:[`
						canvas{border-style: groove;width:100%}
						.saveBtnMenu{max-width: 8rem!important;}`]
})


export class HomeComponent implements OnInit {
		ngOnInit(): void {
			this.getLastImages();
		}
	lastImages:Object[];
	canvas:any;
	url:string;
	player:any;
	@ViewChild("_canvas") myCanvas:ElementRef; 
	//constructor(canvas:canvas){}
	constructor(private imageService:SaveImageService){
		
	}
  ngAfterViewInit() {
    
    this.canvas = this.myCanvas.nativeElement;

	this.url = 'ws://80.111.15.147:8080/';
	this.player = new JSMpeg.Player(this.url, { canvas: this.canvas,preserveDrawingBuffer:true });
  }
	saveImage(){
		this.imageService.saveImage(this.myCanvas.nativeElement);
		this.getLastImages();
	}
	getLastImages(){
		this.imageService.getLastImages().subscribe(data=>{
      console.log(data) ;
     this.lastImages = data });
	}
	


}