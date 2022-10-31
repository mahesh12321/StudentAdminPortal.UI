import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { Subscribable } from 'rxjs';
import { student } from '../models/ui-models/student.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:student[]=[];
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email','mobile','gender','edit'];
  datasource:MatTableDataSource<student>=new MatTableDataSource<student>();

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort !:MatSort;
  filterString:string="";


  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
this.studentservice.getStudents()
.subscribe(
  (successResponse)=> {
     //console.log(successResponse[0].firstName);
     this.students=successResponse
     //console.log('array of elements',this.students)

     this.datasource= new MatTableDataSource<student>(this.students);

     //pagaination Start

     if(this.matPaginator)
     {
      this.datasource.paginator=this.matPaginator;
     }
     //Panginatin End

     if(this.matSort)
     {
      this.datasource.sort=this.matSort;
     }
  },
  (error) => {
     console.log(error);
  }

);
      }
      filterStudents()
      {
        this.datasource.filter=this.filterString.trim().toLowerCase();
      }

}
