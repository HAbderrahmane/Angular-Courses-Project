import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
  output,
} from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from '../env/db-data';
import { DrawerMenuComponent } from '../drawer-menu/drawer-menu.component';

@Component({
  selector: 'app-create-card',
  standalone: true,
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css',
  imports: [DrawerMenuComponent],
})
export class CreateCardComponent implements OnInit {
  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log('card component - click event Bubbled.....', course);
  }
  ngOnInit() {
    required: true;
  }
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();
  constructor() {}
  @Input()
  course!: Course;
  onCourseView() {
    console.log(this.courseEmitter.emit(this.course));
  }
  @Input({ required: true })
  index: number | undefined;
}
