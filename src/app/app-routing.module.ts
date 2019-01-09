import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import {FormComponent} from './form/form.component'


const routes: Routes = [
  { path: 'prueba', component: PruebaComponent },
  { path: 'form', component: FormComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
