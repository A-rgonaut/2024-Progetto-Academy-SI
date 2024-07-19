import {Routes} from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "signin", component: SignInComponent},
  {path: "signup", component: SignUpComponent},
];
