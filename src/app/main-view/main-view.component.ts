import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotels} from "../common/mock/data";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  @Input()
  hotel: IHotels;

  @Input()
  clickedHotel;

  ngOnInit() {
  }

}
