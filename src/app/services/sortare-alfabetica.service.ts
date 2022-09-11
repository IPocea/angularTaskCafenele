import { Injectable } from '@angular/core';
import { ICafeneaSauLocalitate } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SortareAlfabeticaService {
  constructor() {}
  sortByDenumire(lista: ICafeneaSauLocalitate[]): void {
    lista.sort((a, b) =>
      a.denumire.charAt(0) > b.denumire.charAt(0)
        ? 1
        : a.denumire.charAt(0) < b.denumire.charAt(0)
        ? -1
        : 0
    );
  }
}
