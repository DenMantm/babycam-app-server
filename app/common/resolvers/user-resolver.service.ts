import { Injectable } from '@angular/core'; 
import { Resolve,Router} from '@angular/router'; 
import { AuthService } from '../../user/auth.service';
  
@Injectable()
export class UserResolverService implements Resolve<any>{
    constructor(private auth:AuthService,private router:Router){} 
    resolve():any{
        
        if(!this.auth.isAuthenticated()){
        
        return this.auth.isAuthenticatedOnServer().then(user => {
            
            if(user.id == undefined){
              this.router.navigate(['landingPage']);
              return user;
            }else{
              return user;
            }
        });
        }
        else{
            return this.auth.getCurrentUser();
        }
    }
} 