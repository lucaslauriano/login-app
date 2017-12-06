import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'UserPipe'})
export class UserPipe implements PipeTransform {

  transform(value : any, input : string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function (el : any) {
        return el.username.toLowerCase().indexOf(input) > -1; 
      })
    }
    return value;
  }

}
