import {Component, Input, OnInit} from '@angular/core';
import {IHotels} from "../common/mock/data";

@Component({
  selector: 'app-secondary-view-top',
  templateUrl: './secondary-view-top.component.html',
  styleUrls: ['./secondary-view-top.component.css']
})
export class SecondaryViewTopComponent implements OnInit {

  constructor() { }

  @Input()
  clickedHotel;

  ngOnInit(): void {
    console.log(this.clickedHotel);
  }


}
