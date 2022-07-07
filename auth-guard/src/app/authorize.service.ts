

import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
/* import { HTTP } from 'ionic-native'; */

@Injectable()
export class AuthorizeService{
    constructor(private http:HttpClient){ }

    getAuthToken(name:any,pwd:any){
        return this.http.post('http://localhost:4500/api/v1/login',{"name":name, "pwd":pwd})
        .toPromise()
        .then(function(res:any){
            return res;
        })
        .catch((err:any)=>{
            console.log(err)
        })
    }
}