import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from './types/course';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.apiUrl}/courses`);
  }

  delete(id: number) {
    return this.httpClient.delete<void>(`${environment.apiUrl}/courses/${id}`);
  }
}
