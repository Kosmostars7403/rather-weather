import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TemperaturePositivityPipe implements PipeTransform {

  transform(value: number): string {
    value = Math.round(value)
    if (value > 0) return `+${value}`
    if (value < 0) return `-${value}`

    return `${value}`
  }
}
