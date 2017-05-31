import { Component, Inject, Input,OnChanges } from '@angular/core';
import { SaveImageService, MOMENT_TOKEN, NotifyService, JQUERY_TOKEN } from '../../common/index';
import { AuthService } from '../../user/auth.service';
import { IUser } from '../../user/user.model';

@Component({
    selector:'sorted-pictures',
    templateUrl:'./app/pictures/sorted-pictures/sorted-pictures.component.html',
    styles:[`.hideThis{display:none}
            .picture-style{
                width: 100%; 
            }
            .yellow{color:yellow;}
            .cont-style{
          border-radius: 5px;
          margin-top:10px;
            }
            .preloader{margin-left:43%;}`]
})

export class SortedPicturesComponent {
        selectImage: any;
    user:IUser;
    allImages:any;
    sortedImageObject:any;
    birthDate:Date;
    titlePrefix:string;
    private el:HTMLElement
    
    
    @Input() condition:string;
    
    constructor(private imageService:SaveImageService,
                @Inject(MOMENT_TOKEN)private moment,
                private notify:NotifyService,
                @Inject(JQUERY_TOKEN) private $,
                private auth:AuthService){
    }
    ngOnChanges(){
         this.birthDate = this.auth.getCurrentUser().babySettings.babyBirthDate;
        //logic to stop loading data from database on each change
        if(this.sortedImageObject===undefined){
                    this.imageService.getAllImages().subscribe(res=>{

            this.allImages=res; 
            
            this.sortArrayBy(this.condition);
                if(this.condition=="days"){
            this.titlePrefix = "Day ";
        }
        else if(this.condition=="weeks"){
            this.titlePrefix = "Week ";
        }
        else if(this.condition=="months"){
            this.titlePrefix = "Months ";
        }
        else{
            this.titlePrefix = "Favourite ";
        }
    
});

        }
        else{ 
            
             this.sortArrayBy(this.condition);
                if(this.condition=="days"){
            this.titlePrefix = "Day ";
        }
        else if(this.condition=="weeks"){
            this.titlePrefix = "Week ";
        }
        else if(this.condition=="months"){
            this.titlePrefix = "Months ";
        }
        else{
            this.titlePrefix = "Week ";
        }



        }



    }

    removeImage(image){

    this.selectImage = image;
        this.$('#DeleteImage').modal();

}
deleteSelected(){
  //removing from main collection
        for(let i = 0;i<this.allImages.length;i++){
            if(this.selectImage._id === this.allImages[i]._id){
                this.allImages.splice(i, 1);
                //console.log(this.allImages.length);
                break;
            }
        }
        //removing from sorted collection
        for(let i = 0;i<this.sortedImageObject.length;i++){
                for(let g = 0;g<this.sortedImageObject[i].images.length;g++){
                    if(this.selectImage._id === this.sortedImageObject[i].images[g]._id){
                        this.sortedImageObject[i].images.splice(g, 1);
                        break;
                    }
                }
        }
        this.notify.success("Removed Succesfully","Image heve been removed succesfully!");

        //Open question dialog here

       this.imageService.removeImage(this.selectImage).subscribe(resp=>{
           
         //  console.log(resp)
           //remove image from the array ->
        
    });
}
    

    sortArrayBy(condition){
        let Passed;
        this.sortedImageObject = [];
        let tmpObj = {};
        let tmpAllImgs ;
        
        if(condition == "Favourite") {
        condition = 'weeks'; 
        tmpAllImgs = this.allImages.slice().filter(cond => cond.favourite == true);
        }
        else{
         tmpAllImgs = this.allImages.slice();
        }
        
        
        tmpAllImgs.forEach(item => {

            var imageTakken = this.moment().diff(item.imageDate, condition);
            var birthDate = this.moment().diff(this.birthDate, condition);

           // console.log(birthDate-imageTakken);

            Passed = birthDate-imageTakken;
            if(tmpObj[Passed]==undefined){
                tmpObj[Passed] = []
                tmpObj[Passed].push(item);
            }
            else{
                tmpObj[Passed].push(item);
            }
            

        })
    
        for (var key in tmpObj) {
    // skip loop if the property is from prototype
    if (!tmpObj.hasOwnProperty(key)) continue;

    var obj = tmpObj[key];

    let tmpObject = {group:key,
                     images:obj,
                    hidden:true};
    
    this.sortedImageObject.push(tmpObject);
    // for (var prop in obj) {
    //     // skip loop if the property is from prototype
    //     if(!obj.hasOwnProperty(prop)) continue;

    //     // your code
    //     alert(prop + " = " + obj[prop]);
    // }
}

        //console.log(Passed);
        //console.log(this.sortedImageObject.reverse());
        
        //reversing array (Lets hope its not gona get big)
        this.sortedImageObject.reverse();

    }
    
    changeImageDetails(updatedImage){
        
        updatedImage.favourite = !updatedImage.favourite;
        
        this.imageService.changeImageDetails(updatedImage).subscribe(res=>{
           // console.log(res);
        });
        
    }

}