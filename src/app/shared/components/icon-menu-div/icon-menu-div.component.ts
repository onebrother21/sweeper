import { Component } from '@angular/core';
import { Icon } from '@state';
//import { LayoutService } from '@layout';

@Component({
  selector: 'sweeper-icon-menu-div',
  templateUrl: './icon-menu-div.component.html',
  styleUrls: ['./icon-menu-div.component.scss'],
})
export class IconMenuDivComponent {
  title = "icon-menu-div";
  //menu:Icon[] = this.layout.menu;
  //constructor(private layout:LayoutService){}
  selectItem(item:Icon){console.log(item);}
}