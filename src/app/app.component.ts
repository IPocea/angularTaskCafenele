import { Component, OnInit } from '@angular/core';
import { PseudoApiService } from './services/pseudo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ExAngular';

  constructor(private api: PseudoApiService) {}

  ngOnInit(): void {}
}
