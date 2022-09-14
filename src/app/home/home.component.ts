import { Component, ElementRef, AfterViewInit } from '@angular/core';

import { AppStylingService } from '../shared/app-styling.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private appStylingService: AppStylingService
  ) {}

  ngAfterViewInit() {
    this.appStylingService.setStyles(this.el, [
      {
        name: 'backgroundColor',
        value: '#091427'
      }
    ]);

    this.appStylingService.removeStyles(this.el, [
      'minHeight',
      'backgroundImage',
      'backgroundSize',
      'backgroundRepeat',
      'backgroundPosition'
    ]);
  }
}
