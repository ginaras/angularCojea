import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDataService } from './course-data.service';
import { InstructorDataService } from './instructor-data.service';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { InstructorsPageComponent } from './instructors-page/instructors-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { PlusMinusComponent } from './plus-minus/plus-minus.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CoursesPageComponent,
    InstructorsPageComponent,
    HomePageComponent,
    AddInstructorComponent,
    NavbarComponent,
    EditInstructorComponent,
    BusinessPageComponent,
    PlusMinusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseDataService,
    InstructorDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
