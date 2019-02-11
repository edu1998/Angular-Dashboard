import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { TablasocketService } from '../services/tabla-socket//tablasocket.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {GraficaService} from '../services/graficas/grafica.service'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public socketS: GraficaService) { }

}
