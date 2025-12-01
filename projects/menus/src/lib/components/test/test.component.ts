import { Component } from '@angular/core';
import { TestDTO } from '../../models/dtos/test.dto';
import { RespuestaDTO } from '../../models/dtos/respuetsas.dto';
import { CategoriaDTO } from '../../models/dtos/cateforia.dto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViolentometroComponent } from './violentometro.component';

@Component({
  selector: 'lib-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  //VARIABLES
  categorias: CategoriaDTO[] = [];
  respuetsas: RespuestaDTO[] = [];
  progreso: number = 0;
  indexCat: number = 0;
  totalPreguntas: number = 0;
  paginas: number = 0;
  nextButtonName: string = "Siguiente";
  enableNext: boolean = true;
  enablePrevious: boolean = false;
  resultados: number = 0;
  constructor(private modal: NgbModal){}

  ngOnInit(): void {
    this.CreateRespuestas();
    this.CreateCategorias();
    this.CalcularTotalPreguntas();
  }

  ngAfterViewInit(): void {
   
  }
  //METODOS
  private CreateCategorias() {
    this.categorias = [
      { 
        Nombre: "Violencia emocional", 
        Preguntas: [
          { Pregunta: "Minimiza tus emociones o te dice que exageras.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Te hace sentir culpade cuando expresas tus necesidades.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Cambia los hechos para confundirte (gaslighting).", Respuestas: this.respuetsas, Resultado: -1 },
        ] 
      },
      { 
        Nombre: "Violencia identitaria interna (plumofobia, transfobia, bifobia, etc.)", 
        Preguntas: [
          { Pregunta: "Critica tu expresión de género (muy masc, muy fem, no suficiente “trans”, etc.).", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Hace comentarios hirientes sobre tu identidad LGBTQ+.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Usa estereotipos internos del colectivo para invalidarte (no eres lo suficientemente…).", Respuestas: this.respuetsas, Resultado: -1 },
        ] 
      },
      { 
        Nombre: "Violencia de control", 
        Preguntas: [
          { Pregunta: "Te dice con quién puedes hablar o convivir dentro de la comunidad.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Se molesta si quieres convivir con otros amigos LGBTQ+.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Quiere revisar tus redes, mensajes o actividades digitales.", Respuestas: this.respuetsas, Resultado: -1 },
        ] 
      },
      { 
        Nombre: "Violencia social y comunitaria", 
        Preguntas: [
          { Pregunta: "Te critica frente a otras personas del colectivo.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Te aísla de espacios LGBTQ+ porque le molestan tus amistades o tu ambiente.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Usa “la comunidad” para manipularte (ej. “nadie te querrá ahí”, “yo sé cómo deberías ser”).", Respuestas: this.respuetsas, Resultado: -1 },
        ] 
      },
      { 
        Nombre: "Violencia psicológica y de desgaste", 
        Preguntas: [
          { Pregunta: "Te hace sentir insuficiente, inadecuade o insegure de quién eres.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Amenaza con terminar o alejarse para que hagas lo que quiere.", Respuestas: this.respuetsas, Resultado: -1 },
          { Pregunta: "Te hace creer que la violencia es normal en relaciones LGBTQ+.", Respuestas: this.respuetsas, Resultado: -1 },
        ] 
      }
    ];
  }

  private CreateRespuestas() {
    this.respuetsas = [
      { Nombre: "Nunca", Valor: 0 },
      { Nombre: "Casi nunca", Valor: 1 },
      { Nombre: "A veces", Valor: 2 },
      { Nombre: "Casi siempre", Valor: 3 },
      { Nombre: "Siempre", Valor: 4 }
    ];
  }

  NextCat() {
    if (this.indexCat < this.categorias.length - 1) {
      this.indexCat++;
      if((this.indexCat + 1) == this.paginas) {
        this.enableNext = false;
      } else {
        this.enableNext = true;
      }
      this.enablePrevious = true;   
    } else {  
      if(this.nextButtonName == "Resultados" && (this.indexCat + 1) == this.paginas) {
        const result = this.modal.open(ViolentometroComponent, {
          size: 'xl',
          keyboard: false
        });
        this.ObtenerResultados();
        result.componentInstance.Resultados = (100 / 60) * this.resultados;
      }
    }
    if(Math.round(this.progreso) >= 100 && (this.indexCat + 1) == this.paginas) {
      this.nextButtonName = "Resultados";
      this.enableNext = true;
    }
  }

  PreviousCat() {
    if (this.indexCat > 0) {
      this.indexCat--;
      if(this.indexCat == 0) {
        this.enablePrevious = false;
      } else {
        this.enablePrevious = true;
      }
      this.nextButtonName = "Siguiente";
      this.enableNext = true;
    }
  }

  CalcularTotalPreguntas() {
    this.paginas = this.categorias.length;
    this.categorias.forEach(cat => {
      this.totalPreguntas += cat.Preguntas.length;
    })
  }

  ObtenerResultados() {
    this.resultados = 0;
    this.categorias.forEach(cat => {
      cat.Preguntas.forEach(preg => {
        if(preg.Resultado >= 0) {
          this.resultados += preg.Resultado;
        }
      });
    });
  }

  ValidarProgreso() {
    this.progreso = 0;
    this.categorias.forEach(cat => {
      cat.Preguntas.forEach(preg => {
        if(preg.Resultado >= 0) {
          this.progreso += 1;
        }
      });
    });
    this.progreso = (this.progreso / this.totalPreguntas) * 100;

    if(Math.round(this.progreso) >= 100 && (this.indexCat + 1) == this.paginas) {
      this.nextButtonName = "Resultados";
      this.enableNext = true;
    }
  }
}
