import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {MainComponent} from "./main/main.component";
import {FooterComponent} from "./footer/footer.component";
import {UserService} from "../services/UserService/user.service";
import {UserDto} from "../model/UserDto";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'Academy-Project';

  email : string;

  isLogged : boolean = false;

  constructor(private userService: UserService, private router : Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLogged = this.router.url === "/login";
      }
    })
  }

  ngOnInit(){
  }

  onElementAdd($event: string) {
    this.email = $event;
  }
}
