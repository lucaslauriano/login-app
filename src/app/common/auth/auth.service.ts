import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  
  private authenticatedUser: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();
  
  constructor(private http : Http) {}

  login(username : string, password : string) {
    return this
      .http
      .post('/api/authenticate', JSON.stringify({username: username, password: password}))
      .map((response : Response) => {
        console.log('Logado com  Sucesso');
        let user = response.json();

        if (user && user.token) {
          this.authenticatedUser = true;
          this.showMenuEmitter.emit(true);
          
          localStorage.setItem('currentUser', JSON.stringify(user));
          
        } else {
            this.showMenuEmitter.emit(false);
        }
      });
  }

    

  logout() {
    localStorage.removeItem('currentUser');
    this.showMenuEmitter.emit(false);
  }
}