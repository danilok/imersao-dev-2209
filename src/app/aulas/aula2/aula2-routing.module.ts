import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Aula2Component } from './aula2.component';

const routes: Routes = [
  {
    path: '',
    component: Aula2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Aula2RoutingModule {}
