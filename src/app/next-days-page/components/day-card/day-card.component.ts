import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {HourlyWeather} from "src/app/shared/models/upcoming-days";

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayCardComponent {
  @Input() dayWeather: HourlyWeather[] = []
  expanded = false
}
