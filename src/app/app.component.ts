import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from './types/course';
import { Instructor } from './types/instructor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-courses';

  courses: Course[] = [];
  instructors: Instructor[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Course[]>("http://localhost:3000/courses").subscribe(response => {
      this.courses = response;
    });

    this.httpClient.get<Instructor[]>("http://localhost:3000/instructors").subscribe((resp: Instructor[]) => {
      this.instructors = resp;
    });
  }
}
