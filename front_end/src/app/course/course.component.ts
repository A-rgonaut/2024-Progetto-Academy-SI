import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {CourseDto} from "../../model/CourseDto";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent{

  @Input() data !: CourseDto

  stars : number[] = [1,1,1,1,1];

}
