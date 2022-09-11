import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCafeleComponent } from './lista-cafele.component';

describe('ListaCafeleComponent', () => {
  let component: ListaCafeleComponent;
  let fixture: ComponentFixture<ListaCafeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCafeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCafeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
