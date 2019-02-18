import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumberTransformer'
})
export class PhonenumberTransformerPipe implements PipeTransform {

  transform(phoneNumber: number): any {
    let cityCode = phoneNumber.toString().slice(0,3);
    let restNumber = phoneNumber.toString().slice(4);

    return `(${cityCode}) ${restNumber}`;
  }

}
