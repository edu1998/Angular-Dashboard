import { Component, OnInit, OnDestroy } from '@angular/core';
// import { TablasocketService } from './../services/tabla-socket/tablasocket.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tablas-socket',
  templateUrl: './tablas-socket.component.html',
  styleUrls: ['./tablas-socket.component.css']
})
export class TablasSocketComponent implements OnInit, OnDestroy {
  constructor(
    // private socket_Service: TasblasocketService
  ) {
    this.data = { name: '', age: null };
    this.registros = [];
  }

  private data: { name: string, age: number };
  private unsubscribe_registro: Subscription;
  public registros: Array<any>;
  elemento: HTMLElement;

  send() {
    // this.socket_Service.emitir('mensaje-emit', this.data);
  }

  ngOnInit() {
    this.elemento = document.getElementById('c_registros');
    // this.unsubscribe_registro = this.socket_Service.escuchar('registro').subscribe((data) => {
    //   console.log('esto se recibe desde el servidor', data);
    //   this.registros.push(data);
    //   setTimeout(() => {
    //     this.elemento.scrollTop = this.elemento.scrollHeight;
    //   }, 50);
    // });

    // this.socket_Service.escuchar('hola-get').subscribe(data => {
    //   console.log(data);
    // });

  }

  ngOnDestroy() {
    // this.unsubscribe_registro.unsubscribe();
  }

}
