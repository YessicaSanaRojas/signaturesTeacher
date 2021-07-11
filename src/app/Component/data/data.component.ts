import { Component, OnInit } from '@angular/core';
import { FunctionalityService } from '../../Service/functionality.service';
import { Teacher } from '../../Classes/teacher';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public listTeachers : Teacher[];
  public teacherObj : Teacher = new Teacher();
  form = new FormGroup({
    selectTeacher: new FormControl('', Validators.required)
  });

  constructor(public functionalityService : FunctionalityService,
              public fb: FormBuilder) {
    this.listTeachers = functionalityService.getTeacher();

    
   }

  ngOnInit(): void {
  }

  send(){
    this.teacherObj = this.functionalityService.getSignature();
    console.log( this.teacherObj);
  }

  onChange(){
    this.functionalityService.querySignature(this.form.get('selectTeacher').value);
  }
}
