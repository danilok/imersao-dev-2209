import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Aula1Component } from './aula1.component';

const routes: Routes = [
  {
    path: '',
    component: Aula1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Aula1RoutingModule {}
