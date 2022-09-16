import { AfterViewInit, Component, ElementRef } from '@angular/core';

import { AppStylingService } from 'src/app/shared/app-styling.service';

@Component({
  selector: 'app-aula2',
  templateUrl: './aula2.component.html',
  styleUrls: ['./aula2.component.scss']
})
export class Aula2Component implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private appStylingService: AppStylingService
  ) {}

  ngAfterViewInit(): void {
    this.appStylingService.setStyles(this.el, [
      {
        name: 'backgroundColor',
        value: '#000000'
      },
      {
        name: 'backgroundImage',
        value: `url('https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-1-conversor-de-moedas.png')`
      },
      {
        name: 'backgroundSize',
        value: '100vh'
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
