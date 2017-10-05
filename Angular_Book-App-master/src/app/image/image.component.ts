import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent  {
 
products:Array<any>;
constructor(private _dataService: DataService) {
    
        this._dataService.getImageData()
        .subscribe(res => this.products = res);
}
}
