import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SignInComponent} from "../sign-in/sign-in.component";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {AddCourseComponent} from "../add-course/add-course.component";
import {NgIf} from "@angular/common";
import {SubscribeComponent} from "../subscribe/subscribe.component";
import {UserService} from "../../services/UserService/user.service";

@Component({
  selector: 'app-tmp-form',
  standalone: true,
  imports: [
    SignInComponent,
    SignUpComponent,
    AddCourseComponent,
    SubscribeComponent,
    NgIf
  ],
  templateUrl: './tmp-form.component.html',
  styleUrl: './tmp-form.component.css'
})
export class TmpFormComponent implements OnInit{

  @Output("userNameEvent")
  requestEvent = new EventEmitter<string>();

  isLogged : boolean = false;
  user : number;
  role : number;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserByEmail(localStorage.getItem("user_email")).subscribe(result => {
      if(result != null){
        this.isLogged = true;
        this.user = result.id;
        console.log(this.role + " " + this.user);
      }
    })
  }
}
