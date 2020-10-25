import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../course-data.service';
import { Course } from '../types/course';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  courses: Course[] = [];
  selectedCourse: Course = null;

  constructor(private courseDataService: CourseDataService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.courseDataService.getAll().subscribe((response: Course[]) => {
      this.courses = response;
    });
  }

  onCouseSelected(course: Course) {
    this.selectedCourse = course;
    // alert('Course selected!');
  }

  onCouseDeleted(course: Course) {
    const confirmed = confirm('Are you sure you want to delete this course?');
    if (confirmed) {
      this.courseDataService.delete(course.id).subscribe(() => {
        this.loadAll();
      });
    }
  }

  clearSelected() {
    this.selectedCourse = null;
  }

}
