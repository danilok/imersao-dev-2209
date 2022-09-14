import { Component, ElementRef } from '@angular/core';
import { AppStylingService } from './shared/app-styling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imersao-dev-2209';

  constructor(
    private el: ElementRef,
    private appStylingService: AppStylingService
  ) {}

  ngAfterViewInit() {
    this.appStylingService.setStyles(this.el, [
      {
        name: 'backgroundColor',
        value: '#f0f0f0'
      }
    ]);
  }
}
