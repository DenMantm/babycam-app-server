import { Injectable,Inject } from '@angular/core';
import {JQUERY_TOKEN} from '../../common/jQuery.service';

@Injectable()
export class NoSleep{

constructor(@Inject(JQUERY_TOKEN) private $){

}



}
