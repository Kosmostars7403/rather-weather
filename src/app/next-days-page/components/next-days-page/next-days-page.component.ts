import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-next-days-page',
  templateUrl: './next-days-page.component.html',
  styleUrls: ['./next-days-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextDaysPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
