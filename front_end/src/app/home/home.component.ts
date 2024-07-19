import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MainComponent} from "../main/main.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {UserService} from "../../services/UserService/user.service";
import {NavigationEnd, Router} from "@angular/router";
import {UserDto} from "../../model/UserDto";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        FooterComponent,
        MainComponent,
        NavbarComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  title = 'Academy-Project';

  email : string;

  isLogged : boolean = false;

  /*
  constructor(private userService: UserService, private router : Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLogged = this.router.url === "/login";
      }
    })
  }
   */

  constructor(private userService: UserService) {  }

  ngOnInit(){
  }

  onElementAdd($event: string) {
    this.email = $event;
  }

}
