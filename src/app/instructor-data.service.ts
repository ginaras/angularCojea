import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Instructor } from './types/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorDataService {

  constructor(private httpClient: HttpClient) { }

  getOne(id: number) {
    return this.httpClient.get<Instructor>(`${environment.apiUrl}/instructors/${id}`);
  }

  getAll() {
    return this.httpClient.get<Instructor[]>(`${environment.apiUrl}/instructors`);
  }

  save(newInstructor: Instructor) {
    return this.httpClient.post<Instructor>(`${environment.apiUrl}/instructors`, newInstructor)
  }

  update(instructor: Instructor) {
    return this.httpClient.put<Instructor>(`${environment.apiUrl}/instructors/${instructor.id}`, instructor)
  }

  delete(id: number) {
    return this.httpClient.delete<void>(`${environment.apiUrl}/instructors/${id}`)
  }
}
