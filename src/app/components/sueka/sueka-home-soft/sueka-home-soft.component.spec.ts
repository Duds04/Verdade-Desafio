import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuekaHomeSoftComponent } from './sueka-home-soft.component';

describe('SuekaHomeSoftComponent', () => {
  let component: SuekaHomeSoftComponent;
  let fixture: ComponentFixture<SuekaHomeSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuekaHomeSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuekaHomeSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
