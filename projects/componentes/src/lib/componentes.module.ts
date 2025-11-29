import { NgModule } from '@angular/core';
import { LayoutContentComponent } from './components/layout-content-component/layout-content.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentesRouting } from './componentes.routes';
import { HeaderAppBarComponent } from './components/header-app-bar/header-app-bar.component';
import { MaterialModule } from '../../../../src/app/material.module';


@NgModule({
  declarations: [
    LayoutContentComponent,
    HeaderAppBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ComponentesRouting
  ],
  exports: [
    LayoutContentComponent,
    HeaderAppBarComponent
  ]
})
export class ComponentesModule { }
