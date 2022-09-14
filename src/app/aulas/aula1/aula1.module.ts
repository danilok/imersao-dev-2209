import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Aula1Component } from './aula1.component';
import { FormNotasComponent } from './form-notas/form-notas.component';
import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';
import { Aula1RoutingModule } from './aula1-routing.module';

@NgModule({
  declarations: [Aula1Component, FormNotasComponent, FormMensagemComponent],
  imports: [CommonModule, ReactiveFormsModule, Aula1RoutingModule],
  exports: [Aula1Component]
})
export class Aula1Module {}
