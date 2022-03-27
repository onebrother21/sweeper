import { Component } from '@angular/core';

@Component({
  selector: 'sweeper-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  title = "banner";
  greeting = "Sweeper has got your back!";
  oneliner = "New things happening inside...";
}
