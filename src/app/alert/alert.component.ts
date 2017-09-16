import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Select2OptionData } from "ng2-select2";
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  providers:[HttpClient]
})

export class AlertComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit {
  title: string;
  message: any;
  optionData: Array<Select2OptionData>;
  currentSelected: string = '1';
  listImage: Array<any> = [];
  
  dataForm: any = {
    name: '',
    date1: new Date(),
    date2: new Date(),
    des: '',
    select: '',
    image: {
      id: '1',
      src: '',
    },
    images: {
      id: '2',
      src: ''
    }
  }

  constructor(dialogService: DialogService, private http: HttpClient) {
    super(dialogService);
  }

  ngOnInit() {
    this.optionData = [
      {
        id: '1',
        text: "Link"
      },
      {
        id: '2',
        text: "Image"
      }
    ]

    if(this.message) {
      this.dataForm = this.message;
      // this.listImage = this.dataForm.images.src;
      // this.cu
      // console.log("load data", this.message);
      if(this.message.images.src) {
        this.currentSelected = '2',
        this.listImage = this.message.images.src;
      } 
    }
  }

  confirm() {
    this.result = this.dataForm;
    if(this.currentSelected == '2') {
      this.dataForm.images.src = this.listImage;
    }
    console.log("data", this.dataForm);
    this.close();
  }

  changeTypeUpload(data) {
    this.currentSelected = data.value;
    this.dataForm.image.src='';
    this.dataForm.images.src='';
    this.listImage = [];
  }

  imagesPreview(input, placeToInsertImagePreview, scope) {
    scope.listImage = [];
    if (input.files && input.files.length > 0) {
      var filesAmount = input.files.length;
      for (var i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = function (event: any) {
          scope.listImage.push({ id: scope.listImage.length + 1, src: event.target.result });
        }
        reader.readAsDataURL(input.files[i]);
      }
    }
  };

  hideParent(id) {
    let res = this.listImage.filter(function (img) {
      return img.id != id;
    });
    this.listImage = res;
  }

  fileChanged = (e) => {
    this.imagesPreview(e.target, 'div.imagePreview', this);
  }

  checkValidURL = (url) => {
    this.http.get(url).subscribe(p => {
      return true;
    }, err => { return false;})
  }

}
