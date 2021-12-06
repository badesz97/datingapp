import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../app/models/user";
import {ReplaySubject} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'auth', model).pipe(
      map((response: User) => {
        const user = response;
        if (user.token!=null) {
          this.setCurrentUser(user);
        }
        return user;
      })
    );
  }

  register(model: any){
    return this.http.put(this.baseUrl + 'auth', model).pipe(
      map((user: User) => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    if (user!=null) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(user.token));
      this.currentUserSource.next(user);
    }
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
  }
}
