import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
@Component({
  selector: 'app-create-card-second',
  standalone: true,
  imports: [],
  templateUrl: './create-card-second.component.html',
  styleUrl: './create-card-second.component.css'
})
export class CreateCardSecondComponent implements OnInit

{
  courses: any[] | undefined;


  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courses=this.courseService.COURSES; 
  }


}
