import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorDataService } from '../instructor-data.service';
import { Instructor } from '../types/instructor';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.scss']
})
export class EditInstructorComponent implements OnInit {

  form = this.formBuilder.group({
    id: null,
    name: ['', Validators.required],
    picture: '',
    topics: '',
    rating: null,
    students: null,
    courses: null
  });

  constructor(
    private formBuilder: FormBuilder,
    private instructorDataService: InstructorDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idFromRoute = this.activatedRoute.snapshot.params['id'];
    this.instructorDataService.getOne(idFromRoute).subscribe(instructor => {
      this.form.setValue(instructor);
    })
  }

  update() {
    this.instructorDataService.update(this.form.value).subscribe(() => {
      alert('Success!');
      this.router.navigateByUrl('/instructors');
    });
  }
}
