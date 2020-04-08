import { TablasocketService } from './../services/tabla-socket/tablasocket.service';
import { Component, OnInit } from '@angular/core';
import { GraficaService } from './../services/graficas/grafica.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 82], label: 'Ventas' },
  ];
  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Macho'];

  constructor(
    private graficasS: GraficaService,
    private Socket_Service: TablasocketService
  ) { }

  onClick() {
    this.graficasS.get().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.lineChartData = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ];
    }, 6000);
  }

}
