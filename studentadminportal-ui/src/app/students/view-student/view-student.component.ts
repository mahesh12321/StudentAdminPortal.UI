import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/models/ui-models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentId:string | null|undefined;
  student:student={
    id:'',
    firstName:'',
    lastName:'',
    dateOfBirth:'',
    email:'',
    mobile:0,
    genderId:'',
    profileImageUrl:'',
    gender:
  {
    id:'',
    description:''
  },
  address:{
    id:'',
    physicalAddress:'',
    postalAddress:''
  }
  }
  constructor(private readonly httpService:StudentService,private readonly route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) =>{
       this.studentId= params.get('id');

       if(this.studentId)
       {
        this.httpService.getStudent(this.studentId).subscribe(
            (successResponse) =>
          {
           // console.log(successResponse);
           this.student=successResponse;
          });
       }
      }
    );
  }

}
