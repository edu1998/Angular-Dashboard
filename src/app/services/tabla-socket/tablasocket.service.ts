import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  private url = 'http://192.168.2.7:8080/';
  public statusS = false;

  holaService() {
    console.log('hola desde socket service');
  }


  // get(): Observable<any> {
  //   return this.http.get(`${this.url}crud`).pipe();
  // }

  checkoutSatatus() {
    this.socketS.on('connect', () => {
      console.log('conectado al servidor');
      this.statusS = true;
    });

    this.socketS.on('disconnect', () => {
      console.log('desconectado al servidor');
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
