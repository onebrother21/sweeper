import { Component,Input } from '@angular/core';
import { Icon } from '@state';

@Component({
  selector: 'sweeper-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  title = "icon";
  @Input() item:Icon = {type:"",label:"",class:""};
}
