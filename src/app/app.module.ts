import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
} from '@angular/material';
import { PruebaComponent } from './prueba/prueba.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormComponent } from './form/form.component';
import { TablasSocketComponent } from './tablas-socket/tablas-socket.component';
import { ServicesModule } from './services/services.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraficaComponent } from './grafica/grafica.component';
// import { ChartsModule } from 'ng2-charts';


const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    SidenavComponent,
    FormComponent,
    TablasSocketComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ServicesModule,
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
