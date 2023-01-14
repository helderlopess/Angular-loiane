import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent {
  nomePortal: string;

  //array declarado com tipo definido com os cursos listados no template usados no ng for
  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  // com base na nova versao o constructor não mais declarado por padrao e deve ser feito caro o dev deseje utilizar suas funcionalidades

  //lembrando que o constructor deve ser declado dentro o export class
  constructor() {
    this.nomePortal = 'http://loiane.training';
  }
}
