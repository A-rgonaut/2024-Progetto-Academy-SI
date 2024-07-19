import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AddCourseRequest} from "../../model/AddCourseRequest";
import {CategoryService} from "../../services/CategoryService/category.service";
import {CategoryDto} from "../../model/CategoryDto";
import {NgForOf, NgIf} from "@angular/common";
import {CourseService} from "../../services/CourseService/course.service";

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit{

  title : string = "Add a Course";
  categories : CategoryDto[];

  constructor(private categoryService : CategoryService, private courseService : CourseService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe((result:CategoryDto[]) => {
      console.log(result);
      this.categories = result;
    });
  }

  addCourseRequest : AddCourseRequest = new AddCourseRequest();

  @ViewChild('f',{static:true}) addCourseForm!:NgForm;

  submit(form : NgForm) {
    console.log(this.addCourseRequest);
    this.courseService.add(this.addCourseRequest).subscribe(() => {
      console.log(this.addCourseRequest);
    })

    this.addCourseForm.reset();
  }
}
