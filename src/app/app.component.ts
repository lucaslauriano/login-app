import {Component} from '@angular/core';
import {AuthService} from './common/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  showMenuEmitter: boolean = false;
  
  hideNav = true;

  constructor( private authService: AuthService) {}
    
  ngOnInit() {
    this.authService.showMenuEmitter.subscribe(
      showMenu => this.showMenuEmitter = showMenu
    );
    console.log(this.showMenuEmitter);
  }
}


