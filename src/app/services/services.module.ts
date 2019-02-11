import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { TablasocketService } from './tabla-socket/tablasocket.service';
import { GraficaService } from './graficas/grafica.service';
import { PagosService } from './pagos/pagos.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ], providers:
    [
      // TablasocketService,
      GraficaService,
      PagosService
    ]
})
export class ServicesModule { }
