import {Component, OnInit} from '@angular/core';
import {CourseComponent} from "../course/course.component";
import {NgClass, NgForOf} from "@angular/common";
import {CourseDto} from "../../model/CourseDto";
import {CourseService} from "../../services/CourseService/course.service";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseComponent, NgForOf, NgClass],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent  implements OnInit{

  coursesData : CourseDto[] = [];

  constructor(private courseService : CourseService) { }

  grouped_courses:CourseDto[][]

  ngOnInit(){
  }

  groupCourse(courses_data:CourseDto[], dimension:number) : CourseDto[][]
  {
    let grouped = [];

    for(let i = 0; i < courses_data.length; i += dimension)
      grouped.push(courses_data.slice(i, i + dimension))

    return grouped;
  }

}
