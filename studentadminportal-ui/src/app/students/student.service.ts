import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl='https://localhost:44345/student/';

  constructor(private httpService : HttpClient) { }
  getStudents():Observable<student[]>
  {

   return  this.httpService.get<student[]>(this.baseApiUrl);

  }
  getStudent(studentId :String):Observable<student>
  {
   return this.httpService.get<student>(this.baseApiUrl+studentId);
  }
}
