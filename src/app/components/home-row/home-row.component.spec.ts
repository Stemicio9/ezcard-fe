import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeRowComponent} from './home-row.component';

describe('HomeRowComponent', () => {
  let component: HomeRowComponent;
  let fixture: ComponentFixture<HomeRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
