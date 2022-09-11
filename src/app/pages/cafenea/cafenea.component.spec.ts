import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeneaComponent } from './cafenea.component';

describe('CafeneaComponent', () => {
  let component: CafeneaComponent;
  let fixture: ComponentFixture<CafeneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeneaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
