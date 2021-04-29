import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
      this.btnClass = `btn ${this.btnClass}`;
  }
  
  // @Input('valor') percentaje: number;
  @Input('valor') percentaje: number = 10;
  @Input() btnClass: string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  increase( valor:number ){
    if( this.percentaje >= 100 && valor >=0) {
      this.valorSalida.emit(100);
      return this.percentaje = 100;
    }

    if( this.percentaje <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.percentaje = 0;
    }

    this.percentaje = this.percentaje + valor;
    this.valorSalida.emit(this.percentaje);
  }

  onChange( nuevoValor : number ){
    if(nuevoValor >= 100) {
      nuevoValor = 100;
    } else if ( nuevoValor <= 0 ){
      nuevoValor = 0;
    } else {
      nuevoValor = nuevoValor;
    }

    this.valorSalida.emit(nuevoValor);
  }
  

}
