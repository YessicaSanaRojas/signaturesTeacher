import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Teacher } from '../Classes/teacher';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  listTeachers : Teacher[];
  teacherSignature : Teacher[];
  teacherReturn : Teacher;

  constructor(public http: HttpClient) {
    this.queryTeachers();
    this.querySignature(1);
  }
  
  queryTeachers() {
    this.http.get<Teacher[]>('http://localhost:8080/api/teachers').
      subscribe(x => this.listTeachers = x);
  }

  getTeacher() : Teacher[]{
    return this.listTeachers;
  }

  querySignature(id : number){
    let param = new HttpParams().set('idTeacher', id.toString());
    this.http.get<Teacher>('http://localhost:8080/api/Teacher', {params : param}).subscribe(x => this.teacherReturn = x);
  }

  getSignature() : Teacher{
    return this.teacherReturn;
  }
}
