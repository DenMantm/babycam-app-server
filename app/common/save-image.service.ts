import { Injectable,OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Http, RequestOptions, Headers } from '@angular/http';
//import { Observable } from "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { NotifyService } from './index';

@Injectable()
export class SaveImageService implements OnInit {
  constructor(private auth: AuthService,private http:Http,private notify:NotifyService) {
  }

  ngOnInit() {
    //return this.auth.isAuthenticated();
  }
  removeImage(image){

            let headers = new Headers({'Content-Type':'application/json'});
            let options = new RequestOptions({headers:headers});
            
            return this.http.post('/api/deleteCanvasImage',JSON.stringify(image),options).do(
            resp =>{ if(resp){
                // this.currentUser = resp.json().user;
                // this.router.navigate(['/home']);
                
            }
        }).catch(error =>{
                return Observable.of(false);
            })
      

  }
  saveImage(canvas){
      let image = canvas.toDataURL("image/png");
      console.log("debug2" + image);
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers:headers});
        let formData = new FormData();
        let newImageAttributes = this.imageObjectWithAttributes();
        formData.append("canvImage", image);
        formData.append("canvImageAttributes", JSON.stringify(newImageAttributes));
        

        this.http.post('/api/saveCanvasImage', formData)
        .map(resp => resp.json())
        .subscribe(data => {
            console.log('response', data.fileName)
            data.status?
            this.notify.success('Image Saved',"Images have been succesfully saved!"):
            this.notify.warning('Image Not Saved',"Something went wrong on server side!");
        });

        // this.http.post('/api/saveCanvasImage',formData,options).do(
        //     resp =>{
        //         console.log('Data was posted');
        //     }
        // ).catch(error =>{
        //         return Observable.of(false)
        //     }).subscribe();
  }
  getLastImages(){
      return this.http.get('/api/getLastImages').map(resp => resp.json());
  }

  //assembling object with attributes of the image
  imageObjectWithAttributes(){
      let newImage = {imageUrl:'',
                      imageDate: Date(),
                      madeBy:this.auth.currentUser.userName,
                      favourite:false,
                      title:'Baby Image '+ Date(),
                      comment:''}
      
      return newImage;

  }
  getAllImages(){
    return this.http.get('/api/getAllImages').map(resp => resp.json());
  }
  
          changeImageDetails(updatedImage){
        //spin authentication here and if succesfull
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        //let loginInfo = {username:username,password:password};

        console.log(updatedImage);

        return this.http.post('/api/changeImageDetails',JSON.stringify(updatedImage),options).do(
            resp =>{ if(resp){
                // this.currentUser = resp.json().user;
                // this.router.navigate(['/home']);
                console.log('SPINNNINNNGG!!!');
                
            }
        }).catch(error =>{
                return Observable.of(false);
            })
        // this.currentUser = {id:1, 
        //             username:username,
        //             firstName:'Deniss' }

        
        //return true
    }
  
}


