import { NgModule } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenusRouting } from './menus.routes';
import { MaterialModule } from '../../../../src/app/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { ViolentometroComponent } from './components/test/violentometro.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { DenunciaComponent } from './components/denuncia/denuncia.component';


@NgModule({
  declarations: [
    InicioComponent,
    TestComponent,
    ViolentometroComponent,
    RecursosComponent,
    MapaComponent,
    ComunidadComponent,
    DenunciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MenusRouting
  ],
  exports: [
    InicioComponent
  ]
})
export class MenusModule { }
