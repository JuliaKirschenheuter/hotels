import {Component, Input} from '@angular/core';
import {data$, IHotels} from "./common/mock/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public hotels$ = data$;

  public text = '';







}
