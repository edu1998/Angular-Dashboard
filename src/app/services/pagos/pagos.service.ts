import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(
    private http : HttpClient
  ) { }

solocitarCompra(data: any) {
  return this.http.get(`http://localhost:1001/router/pagar?valor=${data.amount}&email=${data.email}`).pipe();
}

}
