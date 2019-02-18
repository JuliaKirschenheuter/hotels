import {Component, Input, OnInit} from '@angular/core';
import {IHotels} from "../common/mock/data";

@Component({
  selector: 'app-secondary-view-bottom',
  templateUrl: './secondary-view-bottom.component.html',
  styleUrls: ['./secondary-view-bottom.component.css']
})
export class SecondaryViewBottomComponent implements OnInit {

  @Input()
  public clickedHotel;

  constructor() { }

  ngOnInit() {
  }



}
