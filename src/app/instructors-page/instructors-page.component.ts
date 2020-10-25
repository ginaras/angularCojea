import { Component, OnInit } from '@angular/core';
import { InstructorDataService } from '../instructor-data.service';
import { Instructor } from '../types/instructor';

@Component({
  selector: 'app-instructors-page',
  templateUrl: './instructors-page.component.html',
  styleUrls: ['./instructors-page.component.scss']
})
export class InstructorsPageComponent implements OnInit {

  instructors: Instructor[] = [];

  constructor(private instructorDataService: InstructorDataService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.instructorDataService.getAll().subscribe((resp: Instructor[]) => {
      this.instructors = resp;
    });
  }

  deleteInstructor(instructor: Instructor) {
    const confirmed = confirm('Are you sure you want to delete this instructor?');
    if (confirmed) {
      this.instructorDataService.delete(instructor.id).subscribe(() => {
        this.loadAll();
      });
    }
  }

}
