import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TablasocketService } from './tabla-socket/tablasocket.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ], providers:
    [
      TablasocketService
    ]
})
export class ServicesModule { }
