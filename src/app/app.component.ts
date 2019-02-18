import { Component} from '@angular/core';
import {data$, IHotels} from "./common/mock/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public hotels$ = data$;

  public currElement: IHotels;

  public clicked(el: IHotels) {
    this.currElement = el;
    console.log(this.currElement);
  }

}
