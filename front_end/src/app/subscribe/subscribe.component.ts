import {Component, EventEmitter, input, Input, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {UserService} from "../../services/UserService/user.service";
import {SubscribeCourseRequest} from "../../model/SubscribeCourseRequest";

@Component({
  selector: 'app-subscribe',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent{

  title : string = "Subscribe";

  constructor(private userService : UserService) { }

  subscribeCourseRequest : SubscribeCourseRequest = new SubscribeCourseRequest();

  @Input()
  userId : number


  submit() {
    console.log(this.subscribeCourseRequest);
    this.userService.subscribe(this.subscribeCourseRequest.idUser, this.subscribeCourseRequest.idCourse).subscribe(() => {
      console.log(this.subscribeCourseRequest);
    })
  }


}
