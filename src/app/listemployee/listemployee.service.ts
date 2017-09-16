import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "../employeemodel"
import 'rxjs/add/operator/map';
//map phai add rieng
@Injectable()
export class ListemployeeService {

  constructor(private http: HttpClient) { }
  getListEmployee = () => {
    return this.http.get<Employee>("assets/data/listemployee.json");
  }

  updateEmployee = (params) => {
    // return this.http.put('', params); Call post api push
    let data: any = localStorage.getItem('le');

    if (data) {
      data = JSON.parse(data);
      let index = data.filter(function(item){
        return item.id == params.id;
      });

      if(index.length> 0) {
        let tindex = data.indexOf(index[0]);
        data[tindex] = params;
        localStorage.setItem('le', JSON.stringify(data));
      }
  
      return params;
    }
  }

  newEmployee = (params) => {
    // return this.http.post('', params); Call post api post
    //Tao data ao trong localStorage
    let data: any = localStorage.getItem('le');
    if (data) {
      data = JSON.parse(data);
      params.id = data.length + 1;
      data.push(params);
      console.log(data);
      localStorage.setItem('le', JSON.stringify(data));
      console.log('params', params)
      return params;
    } else {

    }
  }
}
