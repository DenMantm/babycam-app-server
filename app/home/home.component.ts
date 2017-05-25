import {Component, ViewChild, ElementRef, AfterViewInit,OnInit, Inject} from '@angular/core';
import { SaveImageService,JQUERY_TOKEN } from '../common/index';
import { AuthService } from '../user/auth.service';

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
		
	private el:HTMLElement;
		
	lastImages:Object[];
	canvas:any;
	video
	url:string;
	player:any;
	@ViewChild("_canvas") myCanvas:ElementRef;
	@ViewChild("_video") myVideo:ElementRef;

	//constructor(canvas:canvas){}
	constructor(private ref:ElementRef,private auth:AuthService,private imageService:SaveImageService, @Inject(JQUERY_TOKEN) private $){
		 this.el = ref.nativeElement;
	}
  ngAfterViewInit() {
    
    this.canvas = this.myCanvas.nativeElement;

	this.url = 'ws://80.111.15.147:8080/';
	this.player = new JSMpeg.Player(this.url, { canvas: this.canvas,preserveDrawingBuffer:true,
												audioBufferSize:512*1024 });
	
	
	//enabling video element
	this.checkNoSleep();
	
	
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
	checkNoSleep(){
		
		let user = this.auth.getCurrentUser();
		console.log('User is:')
		
		console.log(user);

		this.video = this.myVideo.nativeElement;
		
		console.log(this.video);
		
		// setInterval(function(){ 
			
		// 	this.video.play();
			
		// }, 3000);
		
      
		 
		
	}

}