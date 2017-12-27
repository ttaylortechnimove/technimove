import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name:'filterDate'
})

export class FilterDatePipe implements PipeTransform { 
    transform( value: any, args?:any ):any {    
        return new Date(value).toUTCString();
    }

}