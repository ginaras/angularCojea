import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructorsPageComponent } from './instructors-page/instructors-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'courses',
    component: CoursesPageComponent
  }, {
    path: 'instructors',
    component: InstructorsPageComponent
  }, {
    path: 'instructors/add',
    component: AddInstructorComponent
  }, {
    path: 'instructors/:id',
    component: EditInstructorComponent
  }, {
    path: 'for-business',
    component: BusinessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
