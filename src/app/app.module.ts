import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { ContentComponent } from './content/content.component';

import { RouterModule, Routes } from '@angular/router';
import { routing } from "./app.routes";
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //add moi co the xai ngModel 2 chieu cua input

import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { AlertComponent } from './alert/alert.component';
import { DatePickerModule } from "angular-io-datepicker";
import { Select2Module } from 'ng2-select2';
// import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentComponent,
    AddEmployeeComponent,
    FilterPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule, routing, HttpClientModule,FormsModule,NgxPaginationModule,ReactiveFormsModule,BootstrapModalModule
    ,DatePickerModule,Select2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
