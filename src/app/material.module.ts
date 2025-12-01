import { NgModule } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
    MatIcon,
    MatTooltip
  ],
  exports: [
    MatIcon,
    MatTooltip,
    MatRadioModule,
    MatProgressBarModule,
    NgbModule
  ]
})
export class MaterialModule { }
