import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuekaRegrasComponent } from './sueka-regras.component';

describe('SuekaRegrasComponent', () => {
  let component: SuekaRegrasComponent;
  let fixture: ComponentFixture<SuekaRegrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuekaRegrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuekaRegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
