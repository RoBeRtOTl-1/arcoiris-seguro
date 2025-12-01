import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-violentometro',
  standalone: false,
  templateUrl: './violentometro.component.html',
  styleUrl: './violentometro.component.css'
})
export class ViolentometroComponent {

  //VARIABLES
  @Input('Resultados') Resultados: number = 0;
  styleWidth: string = "width: 0%";
  constructor() {}

  ngOnInit(): void {
    this.styleWidth = "width: " + (100 - Math.round(this.Resultados)).toString() + "%";
  }

  ngAfterViewInit(): void {
    
  }
}
