import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor(
    private http: HttpClient,
    private Socket_client : Socket
  ) { 
    this.chekStatusSocket();
  }

  public Sstatus : boolean = false

  chekStatusSocket () {
    this.Socket_client.on('connect', (data) => {
      console.log('Conectado al servidor');
      this.Sstatus = true;
    })

    this.Socket_client.on('disconnect', (data) => {
      console.log('Desconectado al servidor');
      this.Sstatus = false;
    })
  };

  get() {
    return this.http.get(`http://localhost:1001/router`).pipe();
  }
}
