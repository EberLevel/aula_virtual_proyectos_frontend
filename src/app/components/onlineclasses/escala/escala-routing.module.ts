import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscalaComponent } from './escala.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: EscalaComponent }
    ])
  ],
  exports: [RouterModule]
})
export class EscalaRoutingModule { }
