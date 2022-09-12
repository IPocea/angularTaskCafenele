import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetClassNumberService } from 'src/app/services/set-class-number.service';
import { PseudoApiService } from 'src/app/services/pseudo-api.service';
import { take } from 'rxjs';
import { ICafeneaSauLocalitate, IProdusDisponibil } from 'src/app/interfaces';
import { Subscription } from 'rxjs';
import { SortareAlfabeticaService } from 'src/app/services/sortare-alfabetica.service';

@Component({
  selector: 'app-cafenea',
  templateUrl: './cafenea.component.html',
  styleUrls: ['./cafenea.component.scss'],
})
export class CafeneaComponent implements OnInit, OnDestroy {
  cafenea: ICafeneaSauLocalitate = null;
  listaCafele: IProdusDisponibil[] = [];
  seIncarca: boolean = false;
  private adunaCafeneaSubscribtie: Subscription;
  private adunaCafeleSubscribtie: Subscription;
  constructor(
    private route: ActivatedRoute,
    private setClassNumber: SetClassNumberService,
    private api: PseudoApiService,
    private router: Router,
    private sortareService: SortareAlfabeticaService
  ) {}

  ngOnInit(): void {
    this.adunaParams();
  }
  private adunaParams(): void {
    this.route.params.subscribe((params) => {
      this.setClassNumber.setCount.next(+params['id']);
      console.log(params['id']);

      this.adunaDateleCafenelei(+params['id']);
    });
  }
  private adunaDateleCafenelei(id: number): void {
    this.seIncarca = true;
    this.adunaCafeneaSubscribtie = this.api
      .ListaLocalitati()
      .pipe(take(1))
      .subscribe(
        (lista) => {
          for (let item of lista) {
            if (item.id === id) {
              this.cafenea = item;
              break;
            }
          }
          if (this.cafenea) {
            this.adunaCafeleleCafenelei(this.cafenea.id);
          } else {
            this.router.navigate(['/pagina-nu-exista']);
          }
        },
        (err) => {
          this.seIncarca = false;
        }
      );
  }
  private adunaCafeleleCafenelei(cafeneaId: number): void {
    this.adunaCafeleSubscribtie = this.api
      .ProduseDisponibile(cafeneaId)
      .subscribe(
        (cafele) => {
          this.listaCafele = cafele;
          this.sortareService.sortByDenumire(this.listaCafele);
          this.seIncarca = false;
        },
        (err) => {
          this.listaCafele = [];
          this.seIncarca = false;
        }
      );
  }
  ngOnDestroy(): void {
    this.adunaCafeneaSubscribtie?.unsubscribe();
    this.adunaCafeleSubscribtie?.unsubscribe();
  }
}
