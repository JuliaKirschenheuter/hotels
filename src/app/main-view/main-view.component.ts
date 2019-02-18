import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotels} from "../common/mock/data";
import {publish} from "rxjs/operators";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  hotel: IHotels;

  @Output()
  public clickedHotel = new EventEmitter();

  public clicked(el: HTMLHeadElement) {
    this.clickedHotel.emit((el as HTMLHeadElement).textContent);
  }


}
