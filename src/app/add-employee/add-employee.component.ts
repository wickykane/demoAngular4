import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from "../employeemodel";
import { ListemployeeService } from "../listemployee/listemployee.service";
import { Router } from "@angular/router";

import { AlertComponent } from '../alert/alert.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [ListemployeeService, DialogService],
  entryComponents:[AlertComponent]
})
export class AddEmployeeComponent implements OnInit {
  regForm: FormGroup;
  textButton: string = "Continue";
  currentData: any;
  currentStep: number = 1;
  listTask: Array<any> = [];

  constructor(private fb: FormBuilder, private _empService: ListemployeeService, private router: Router, private dialogService: DialogService) {
    this.regForm = fb.group({
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'position': [null, Validators.required],
      'phone': [null, Validators.required],
      'status': [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  submitForm = (data) => {
    //Kiem tra da luu data hien tai chua
    if (this.currentData) {
      console.log(1, this.currentData)
      data.id = this.currentData.id;
      this.currentData = this._empService.updateEmployee(data);
      this.moveToStep(2);
      this.textButton = "Update";
      return;
    }

    this.currentData = this._empService.newEmployee(data);
    console.log('current', this.currentData)
    this.moveToStep(2);
    this.textButton = "Update";
  }

  moveToStep(index) {
    this.currentStep = index;
  }

  backToList = () => {
    let link = ["/list"];
    this.router.navigate(link);
  }
  
  showConfirm(olddata?:any) {
    
    let disposable = this.dialogService.addDialog(AlertComponent, {
      title: (olddata)? "Update task":'Add new task',
      message: olddata
    })
      .subscribe((data: any) => {

        if (data) {
          //Truong hop update task
          if(olddata) {
            let item  = this.listTask.find(function(task){
              return task.id == olddata.id;
            });

            if(item) {
              this.listTask[this.listTask.indexOf(item)] = data;
              this.currentData.tasks = this.listTask;
            }

            return;
          }

          data.id = this.listTask.length + 1;
          this.listTask.push(data);

          console.log("test", this.currentData);
          this.currentData.tasks = this.listTask;
        }
        else {
        }
      });

  }
}
