import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Aula2Component } from './aula2.component';
import { Aula2RoutingModule } from './aula2-routing.module';
import { FormConversorMoedaComponent } from './form-conversor-moeda/form-conversor-moeda.component';

@NgModule({
  declarations: [Aula2Component, FormConversorMoedaComponent],
  imports: [CommonModule, Aula2RoutingModule, ReactiveFormsModule],
  providers: [CurrencyPipe],
  exports: [Aula2Component]
})
export class Aula2Module {}
