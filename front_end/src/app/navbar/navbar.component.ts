import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {UserDto} from "../../model/UserDto";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/AuthService/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  username : string;

  searchQuery : string = "";

  protected readonly localStorage = localStorage;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem("email")) {
      this.authService.getUserByEmail(localStorage.getItem("email")).subscribe((result: UserDto) => {
        this.username = result.firstname + " " + result.lastname;
      })
    }
  }

  onUpdate(){
    console.log(this.searchQuery);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.username = "";
    window.location.reload();
  }
}
