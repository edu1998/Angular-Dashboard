import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class TablasocketService {

  constructor
    (
      private http: HttpClient,
      private socketS: Socket
    ) {
    this.checkoutSatatus();
    this.statusS = false;
  }

  private url = 'http://93.189.89.45:1002/';
  public statusS = false;

  checkoutSatatus() {
    this.socketS.on('connect', () => {
      console.log('conectado al servidor socket');
      this.statusS = true;
    });

    this.socketS.on('disconnect', () => {
      console.log('desconectado al servidor socket');
      this.statusS = false;
    });
  }

  emitir(event: string, data?: any, callback?: Function) {
    this.socketS.emit(event, data);
  }

  escuchar(event: string) {
    return this.socketS.fromEvent(event);
  }
}
