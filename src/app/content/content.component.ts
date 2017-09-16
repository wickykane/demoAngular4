import { Component, OnInit } from '@angular/core';
import { Routes, Router } from "@angular/router"
import { ListemployeeService } from "../listemployee/listemployee.service";
import { SweetAlertService } from 'ng2-sweetalert2';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ListemployeeService, SweetAlertService]
})
export class ContentComponent implements OnInit {
  currentListEmployee: any;
  currentPage:number;
  swalService: any;
  
  constructor(private router: Router, private _listEmployeeService: ListemployeeService, private swal: SweetAlertService) { 
  console.log(swal);
  }

  ngOnInit() {
    this.fetchListEmployee();
    this.currentPage = 1;
  }

  fetchListEmployee = (params?: any) => {
     this._listEmployeeService.getListEmployee().subscribe(data => {
      this.currentListEmployee = data;
      if(!localStorage.getItem('le'))localStorage.setItem('le', JSON.stringify(data));
      else {
        this.currentListEmployee = JSON.parse(localStorage.getItem('le'));
      }
      console.log(this.currentListEmployee);
     },
    err => {

    });
  
  }

  toAddEmployee =  () => {
    let link = ['/add'];
    this.router.navigate(link);
  }

  changePage = (pageNumber) => {
    this.currentPage = pageNumber;
    //Goi request get data roi cap nhat lai bien currentListEmployee
    //this.http.get()...
    
  }
}
