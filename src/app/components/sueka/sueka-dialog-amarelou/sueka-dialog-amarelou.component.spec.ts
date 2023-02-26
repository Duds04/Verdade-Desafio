import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuekaDialogAmarelouComponent } from './sueka-dialog-amarelou.component';

describe('SuekaDialogAmarelouComponent', () => {
  let component: SuekaDialogAmarelouComponent;
  let fixture: ComponentFixture<SuekaDialogAmarelouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuekaDialogAmarelouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuekaDialogAmarelouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
