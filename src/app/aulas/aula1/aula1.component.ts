import { Component, ElementRef, AfterViewInit } from '@angular/core';

import { AppStylingService } from '../../shared/app-styling.service';

@Component({
  selector: 'app-aula1',
  templateUrl: './aula1.component.html',
  styleUrls: ['./aula1.component.scss']
})
export class Aula1Component implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private appStylingService: AppStylingService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.appStylingService.setStyles(this.el, [
      {
        name: 'backgroundColor',
        value: '#000000'
      },
      {
        name: 'backgroundImage',
        value: `url('https://caelum-online-public.s3.amazonaws.com/imersao-dev-3/bg.png')`
      },
      {
        name: 'backgroundSize',
        value: '80vh'
      },
      {
        name: 'backgroundPosition',
        value: 'center bottom'
      },
      {
        name: 'backgroundRepeat',
        value: 'no-repeat'
      },
      {
        name: 'minHeight',
        value: '400px'
      }
    ]);
  }
}
