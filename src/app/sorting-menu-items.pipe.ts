import { Pipe, PipeTransform } from '@angular/core';
import {IHotels} from "./common/mock/data";

@Pipe({
  name: 'sortingMenuItems'
})
export class SortingMenuItemsPipe implements PipeTransform {

  transform(hotels: IHotels[]): any {

    return new Set(hotels.map( elem => elem.type));
  }

}
