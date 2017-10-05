import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Image} from '../product';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent  {
  img:Image={
    name:'',
    id:0,
  }
products:Array<any>;
constructor(private _dataService: DataService) {
    
        this._dataService.getImageData()
        .subscribe(res => this.products = res);
}
deleteImages(name,id,j){
this.img.name=name;
this.img.id=id;
this._dataService.deleteImages(this.img);
this.products.splice(j,1);
}
}
