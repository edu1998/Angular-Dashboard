import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { FormComponent } from './form/form.component';
import { TablasSocketComponent } from './tablas-socket/tablas-socket.component';
import { GraficaComponent } from './grafica/grafica.component';


const routes: Routes = [
  { path: 'prueba', component: PruebaComponent },
  { path: 'form', component: FormComponent },
  { path: 'tablas-socket', component: TablasSocketComponent },
  { path: 'grafica', component: GraficaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
