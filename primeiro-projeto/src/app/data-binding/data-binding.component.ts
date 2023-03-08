import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = `http://loraine.com`; // gerando variavel usada no comp e decalrada no html. a mesma pode ser tipada por se tratar de uma var TS
  cursoAngular: boolean = true;
  n=3;

  urlImage = 'http://lorempixel.com.br/500/400/?';

  //declarando variavel de banco de imagens para site

  getValor() {
    //variavel para interpolação com calculo de numeros
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
