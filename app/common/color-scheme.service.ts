import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ColorSchemeService implements OnInit {
    
    colourScheme:string

    ngOnInit(): void {
        //call to the server here
        this.colourScheme = "blue";
        
    }
    
    getColourScheme():string{
        return this.colourScheme;
    }

    changeColourScheme(colourScheme:string):void{
        this.colourScheme = colourScheme;
        //call to the server to change scheme for the user
    }

}
