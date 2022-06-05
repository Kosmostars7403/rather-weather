import {ChangeDetectionStrategy, Component, Inject, Input} from "@angular/core";
import {SVG_ICONS_PATH} from "src/app/shared/component/svg/svg-icons-path";

@Component({
  selector: 'svg[icon]',
  template: '<svg:use [attr.href]="href"></svg:use>',
  styles: [':host { fill: transparent; stroke: transparent;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input() icon = ''

  constructor(@Inject(SVG_ICONS_PATH) private readonly path: string) {}

  get href():string {
    return `${this.path}#${this.icon}`
  }
}
