import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstructorDataService } from '../instructor-data.service';
import { Instructor } from '../types/instructor';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.scss']
})
export class AddInstructorComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', Validators.required],
    picture: '',
    topics: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private instructorDataService: InstructorDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    const newInstructor: Instructor = {
      id: null,
      picture: this.form.value.picture,
      name: this.form.value.name,
      topics: this.form.value.topics,
      rating: null,
      students: 0,
      courses: 0
    };
    this.instructorDataService.save(newInstructor).subscribe(() => {
      alert('Success!');
      this.router.navigateByUrl('/instructors');
    });
  }

}
