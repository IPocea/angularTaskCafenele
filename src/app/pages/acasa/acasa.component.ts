import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICafeneaSauLocalitate } from 'src/app/interfaces';
import { PseudoApiService } from 'src/app/services/pseudo-api.service';
import { SetClassNumberService } from 'src/app/services/set-class-number.service';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrls: ['./acasa.component.scss'],
})
export class AcasaComponent implements OnInit, OnDestroy {
  listaJudete: ICafeneaSauLocalitate[] = [];
  listaLocalitati: ICafeneaSauLocalitate[] = [];
  listaCafenele: ICafeneaSauLocalitate[] = [];
  seIncarca: boolean = false;
  adunaListeSubscribtie: Subscription;
  constructor(
    private setClassNumber: SetClassNumberService,
    private api: PseudoApiService
  ) {}

  ngOnInit(): void {
    this.setClassNumber.setCount.next(0);
    this.adunaListele();
  }
  private adunaListele(): void {
    this.seIncarca = true;
    this.adunaListeSubscribtie = this.api.ListaLocalitati().subscribe(
      (lista) => {
        this.populeazaListele(lista);
        this.seIncarca = false;
      },
      (err) => {
        this.seIncarca = false;
      }
    );
  }
  private populeazaListele(lista: ICafeneaSauLocalitate[]): void {
    lista.forEach((ele) => {
      if (!ele.idParinte) {
        this.listaJudete.push(ele);
      } else {
        if (ele.fel === 'L') {
          this.listaLocalitati.push(ele);
        } else {
          if (ele.fel === 'C') {
            this.listaCafenele.push(ele);
          }
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.adunaListeSubscribtie?.unsubscribe();
  }
}
