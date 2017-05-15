import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
          let API_BASE = 'https://reqres.in/api/users';
        let loginData = {
            password :password,
            email :username
        }
        let body = JSON.stringify(loginData);
        console.log(loginData)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(API_BASE, loginData, {headers: headers})
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    // store user details in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            },
            (error : Catch) =>{
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}