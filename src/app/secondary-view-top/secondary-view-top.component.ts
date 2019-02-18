import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {IHotels} from "../common/mock/data";

@Component({
  selector: 'app-secondary-view-top',
  templateUrl: './secondary-view-top.component.html',
  styleUrls: ['./secondary-view-top.component.css']
})
export class SecondaryViewTopComponent implements OnInit {

  constructor() { }

  @Input()
  hotel: IHotels;

  @Input()
  clickedHotelAddress;


  public choseHotelWeatherTitle;
  public choseHotelWeatherTemperature;
  public choseHotelWeatherWater;

  ngOnInit(): void {

    console.log(this.hotel);

    if (this.hotel.address === this.clickedHotelAddress) {
      this.choseHotelWeatherTitle = this.hotel.weather.title;
      this.choseHotelWeatherTemperature = this.hotel.weather.temperature;
      this.choseHotelWeatherWater = this.hotel.weather.water;
    }

  }







}
