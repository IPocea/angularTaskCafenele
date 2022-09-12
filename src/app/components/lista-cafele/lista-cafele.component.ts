import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { IProdusDisponibil } from 'src/app/interfaces';

@Component({
  selector: 'app-lista-cafele',
  templateUrl: './lista-cafele.component.html',
  styleUrls: ['./lista-cafele.component.scss'],
})
export class ListaCafeleComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() listaCafele: IProdusDisponibil[];
  listaCafeleFiltrata: IProdusDisponibil[] = [];
  valoareInputCautare: string = '';
  inputCautare: HTMLInputElement;
  cautareSubscribtie: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.listaCafeleFiltrata = this.listaCafele;
  }
  ngAfterViewInit(): void {
    this.inputCautare = document.getElementById(
      'input-cautare'
    ) as HTMLInputElement;
    const keyup$ = fromEvent(this.inputCautare, 'keyup');
    this.cautareSubscribtie = keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(250)
      )
      .subscribe((value) => {
        this.valoareInputCautare = value;
        this.cautaCafea(this.valoareInputCautare);
      });
  }
  stergeValoareaInputului(): void {
    this.valoareInputCautare = '';
    this.inputCautare.value = '';
    this.listaCafeleFiltrata = [...this.listaCafele];
  }
  private cautaCafea(inputValue: string): void {
    if (!inputValue.trim()) {
      this.listaCafeleFiltrata = [...this.listaCafele];
    } else if (!isNaN(+inputValue.trim())) {
      this.cautaDupaId(inputValue);
    } else {
      this.cautaDupaCuvinte(inputValue);
    }
  }
  private cautaDupaId(inputValue: string): void {
    this.listaCafeleFiltrata = this.listaCafele.filter((cafea) => {
      if (cafea.id === +inputValue.trim()) {
        return true;
      }
      return false;
    });
  }
  private cautaDupaCuvinte(inputValue: string): void {
    const listaCuvinte = inputValue.split(' ');
    this.listaCafeleFiltrata = this.listaCafele.filter((cafea) => {
      for (let cuvant of listaCuvinte) {
        if (
          cafea.denumire
            .toLocaleLowerCase()
            .indexOf(cuvant.toLocaleLowerCase()) === -1 &&
          cafea.descriere
            .toLocaleLowerCase()
            .indexOf(cuvant.toLocaleLowerCase()) === -1
        ) {
          return false;
        }
      }
      return true;
    });
  }
  ngOnDestroy(): void {
    this.cautareSubscribtie?.unsubscribe();
  }
}
