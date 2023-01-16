import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
//http objeto

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular']
  }
}
