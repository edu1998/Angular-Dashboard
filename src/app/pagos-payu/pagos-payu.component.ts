import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {PagosService} from '../services/pagos/pagos.service'
import { Unsubscribable } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pagos-payu',
  templateUrl: './pagos-payu.component.html',
  styleUrls: ['./pagos-payu.component.css']
})
export class PagosPayuComponent implements OnInit, OnDestroy {

  constructor(
    private dialog : MatDialog
  ) { 
    this.buyerEmail = 'test@test.com';
    this.amount = 20000;
  }

  public buyerEmail : string;
  public amount : number;


  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      // width: '250px',
      data: {email: this.buyerEmail,amount: this.amount},
      disableClose : true,
      role:'dialog'
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
   console.log('Ondestroy bay');
   
  }

}


// modal component
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../templates-modal/send-pago.modal.html',
})
export class DialogOverviewExampleDialog implements OnInit {

  constructor(
    private s_pagos : PagosService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.datosCompra = false;
    }

  public datosCompraSub : Unsubscribable;
  public datosCompra : any;


  onNoClick(): void {
    this.dialogRef.close(this.datosCompra);
  }

  solicitarcompra(){
    this.datosCompraSub = this.s_pagos.solocitarCompra(this.data).subscribe(data => {
      this.datosCompra = data;
      console.log(this.datosCompra);
      
      this.datosCompraSub.unsubscribe();
    }); 
  }

  ngOnInit() {
    console.log(this.data);
    this.solicitarcompra();    
  }

}