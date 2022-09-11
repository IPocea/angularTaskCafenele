import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNuExistaComponent } from './pagina-nu-exista.component';

describe('PaginaNuExistaComponent', () => {
  let component: PaginaNuExistaComponent;
  let fixture: ComponentFixture<PaginaNuExistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNuExistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNuExistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
