import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuekaHomeComponent } from './sueka-home.component';

describe('SuekaHomeComponent', () => {
  let component: SuekaHomeComponent;
  let fixture: ComponentFixture<SuekaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuekaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuekaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
