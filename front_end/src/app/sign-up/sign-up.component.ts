import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {SignUpRequest} from "../../model/SignUpRequest";
import {NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {Router, RouterLink} from "@angular/router";
import {UserDto} from "../../model/UserDto";
import {AuthService} from "../../services/AuthService/auth.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  title : string = "Sign Up";
  disabled : boolean = true;

  signUpRequest : SignUpRequest = new SignUpRequest();

  constructor(private authService : AuthService, private router : Router) { }

  confirmPsw(event : Event){
    this.disabled = !((<HTMLInputElement>event.target).value == this.signUpRequest.password)
  }

  @ViewChild('f',{static:true}) signUpForm!:NgForm;

  submit(form : NgForm){

    console.log(this.signUpRequest);

    this.authService.signUp(this.signUpRequest).subscribe((result:any) =>{
      console.log(result.token);
      localStorage.setItem('token', result.token);
      localStorage.setItem('email', result.email);

      this.router.navigate([""]);
    })
  }

}
