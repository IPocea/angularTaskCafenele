import { Component, OnInit } from '@angular/core';
import { SetClassNumberService } from 'src/app/services/set-class-number.service';

@Component({
  selector: 'app-pagina-nu-exista',
  templateUrl: './pagina-nu-exista.component.html',
  styleUrls: ['./pagina-nu-exista.component.scss'],
})
export class PaginaNuExistaComponent implements OnInit {
  constructor(private setClassNumber: SetClassNumberService) {}

  ngOnInit(): void {
    this.setClassNumber.setCount.next(0);
  }
}
