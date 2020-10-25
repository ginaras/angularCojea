import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../types/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;

  @Output() courseSelected = new EventEmitter();
  @Output() courseDeleted = new EventEmitter();


  constructor() { }

  ngOnInit(): void {

  }

  buyCourse(): void {
    // alert('It works!');
    this.courseSelected.emit(this.course);
  }

  deleteCourse(): void {
    this.courseDeleted.emit(this.course);
  }
}