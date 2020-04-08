import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { FormComponent } from './form/form.component';
import { TablasSocketComponent } from './tablas-socket/tablas-socket.component';
import { GraficaComponent } from './grafica/grafica.component';
import { PagosPayuComponent } from './pagos-payu/pagos-payu.component';


const routes: Routes = [
  { path: 'Prueba', component: PruebaComponent },
  { path: 'Form', component: FormComponent },
  { path: 'Tablas-socket', component: TablasSocketComponent },
  { path: 'Grafica', component: GraficaComponent },
  { path: 'Pagos', component: PagosPayuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
