import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICafeneaSauLocalitate } from 'src/app/interfaces';
import { PseudoApiService } from 'src/app/services/pseudo-api.service';
import { SetClassNumberService } from 'src/app/services/set-class-number.service';
import { SortareAlfabeticaService } from 'src/app/services/sortare-alfabetica.service';

@Component({
  selector: 'app-lista-localitati',
  templateUrl: './lista-localitati.component.html',
  styleUrls: ['./lista-localitati.component.scss'],
})
export class ListaLocalitatiComponent implements OnInit, OnDestroy {
  seIncarca: boolean = false;
  classNumber: number = 0;
  listaJudete: ICafeneaSauLocalitate[] = [];
  listaLocalitatiAdancime2: ICafeneaSauLocalitate[] = [];
  listaIdParinteAdancime2: (number | null | undefined)[] = [];
  listaLocalitatiAdancime3: ICafeneaSauLocalitate[] = [];
  listaIdParinteAdancime3: (number | null | undefined)[] = [];
  listaLocalitatiAdancime4: ICafeneaSauLocalitate[] = [];
  listaIdParinteAdancime4: (number | null | undefined)[] = [];
  listaLocalitatiAdancime5: ICafeneaSauLocalitate[] = [];
  listaIdParinteAdancime5: (number | null | undefined)[] = [];
  listaLocalitatiAdancime6: ICafeneaSauLocalitate[] = [];
  listaIdParinteAdancime6: (number | null | undefined)[] = [];
  listaCafenele: ICafeneaSauLocalitate[] = [];
  listaIdParinteCafenele: (number | null | undefined)[] = [];
  private adunaListeSubscribtie: Subscription;
  private seteazaNumarClasaSubscribtie: Subscription;
  constructor(
    private api: PseudoApiService,
    private sortareService: SortareAlfabeticaService,
    private router: Router,
    private setClassNumber: SetClassNumberService
  ) {}

  ngOnInit(): void {
    this.seteazaNumarClasaSubscribtie = this.setClassNumber.setCount.subscribe(
      (num) => {
        this.classNumber = num;
      }
    );
    this.adunaListele();
  }
  public arataLocalitate(ev: any): void {
    this.comutareSageti(ev);
  }
  public duteLaCafenea(cafenea: ICafeneaSauLocalitate): void {
    this.router.navigate(['/cafenea', cafenea.id]);
  }
  private comutareSageti(ev: any): void {
    if (ev.target.tagName === 'MAT-ICON') {
      const listaUl = ev.target.parentElement.parentElement.childNodes;
      for (let i = 0; i < listaUl.length; i++) {
        if (listaUl[i].tagName === 'UL') {
          listaUl[i].classList.toggle('continut-afisat');
        }
      }
      ev.target.classList.toggle('sageata-activa');
    } else if (ev.target.tagName === 'SPAN') {
      ev.target.previousElementSibling.classList.toggle('sageata-activa');
      const listaUl = ev.target.parentElement.parentElement.childNodes;
      for (let i = 0; i < listaUl.length; i++) {
        if (listaUl[i].tagName === 'UL') {
          listaUl[i].classList.toggle('continut-afisat');
        }
      }
    }
  }
  private adunaListele(): void {
    this.seIncarca = true;
    this.adunaListeSubscribtie = this.api.ListaLocalitati().subscribe(
      (lista) => {
        this.populeazaSiSorteazaListele(lista);
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
          switch (ele.adancime) {
            case 2:
              this.listaLocalitatiAdancime2.push(ele);
              break;
            case 3:
              this.listaLocalitatiAdancime3.push(ele);
              break;
            case 4:
              this.listaLocalitatiAdancime4.push(ele);
              break;
            case 5:
              this.listaLocalitatiAdancime5.push(ele);
              break;
            case 6:
              this.listaLocalitatiAdancime6.push(ele);
              break;
            default:
              break;
          }
        } else {
          if (ele.fel === 'C') {
            this.listaCafenele.push(ele);
          }
        }
      }
    });
  }
  private sorteazaListele() {
    this.sortareService.sortByDenumire(this.listaJudete);
    this.sortareService.sortByDenumire(this.listaLocalitatiAdancime2);
    this.listaIdParinteAdancime2 = this.listaLocalitatiAdancime2.map(
      (localitate) => localitate.idParinte
    );
    this.sortareService.sortByDenumire(this.listaLocalitatiAdancime3);
    this.listaIdParinteAdancime3 = this.listaLocalitatiAdancime3.map(
      (localitate) => localitate.idParinte
    );
    this.sortareService.sortByDenumire(this.listaLocalitatiAdancime4);
    this.listaIdParinteAdancime4 = this.listaLocalitatiAdancime4.map(
      (localitate) => localitate.idParinte
    );
    this.sortareService.sortByDenumire(this.listaLocalitatiAdancime5);
    this.listaIdParinteAdancime5 = this.listaLocalitatiAdancime5.map(
      (localitate) => localitate.idParinte
    );
    this.sortareService.sortByDenumire(this.listaLocalitatiAdancime6);
    this.listaIdParinteAdancime6 = this.listaLocalitatiAdancime6.map(
      (localitate) => localitate.idParinte
    );
    this.sortareService.sortByDenumire(this.listaCafenele);
    this.listaIdParinteCafenele = this.listaCafenele.map(
      (cafenea) => cafenea.idParinte
    );
  }
  private populeazaSiSorteazaListele(lista: ICafeneaSauLocalitate[]): void {
    this.populeazaListele(lista);
    this.sorteazaListele();
  }
  ngOnDestroy(): void {
    this.adunaListeSubscribtie?.unsubscribe();
    this.seteazaNumarClasaSubscribtie?.unsubscribe();
  }
}
