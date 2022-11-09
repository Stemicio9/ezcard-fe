import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaEggComponent } from './prova-egg.component';

describe('ProvaEggComponent', () => {
  let component: ProvaEggComponent;
  let fixture: ComponentFixture<ProvaEggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaEggComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
