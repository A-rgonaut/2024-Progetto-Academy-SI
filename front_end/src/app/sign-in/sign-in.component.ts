import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {SignInRequest} from "../../model/SignInRequest";
import {UserService} from "../../services/UserService/user.service";
import {UserDto} from "../../model/UserDto";
import {NgClass, NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/AuthService/auth.service";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  title : string = "Sign In";

  signInRequest : SignInRequest = new SignInRequest();

  constructor(private authService : AuthService, private router : Router) { }

  @Output("userNameEvent")
  requestEvent = new EventEmitter<string>();

  @Output("userId")
  requestEventId = new EventEmitter<number>();

  @ViewChild('f',{static:true}) signInForm!:NgForm;

  submit(form : NgForm){

    console.log(this.signInRequest);

    this.authService.signIn(this.signInRequest).subscribe((result:any) =>{
      console.log(result.token);
      localStorage.setItem('token', result.token);
      localStorage.setItem('email', result.email);

      this.router.navigate([""]);
    })
  }
}
