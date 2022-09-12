import { Injectable } from '@angular/core';
import { ICafeneaSauLocalitate, IProdusDisponibil } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SortareAlfabeticaService {
  constructor() {}
  sortByDenumire(lista: ICafeneaSauLocalitate[] | IProdusDisponibil[]): void {
    lista.sort((a, b) =>
      a.denumire.toUpperCase() > b.denumire.toUpperCase()
        ? 1
        : a.denumire.toUpperCase() < b.denumire.toUpperCase()
        ? -1
        : 0
    );
  }
}
