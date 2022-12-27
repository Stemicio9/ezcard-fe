import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableUserModalComponent } from './disable-user-modal.component';

describe('DisableUserModalComponent', () => {
  let component: DisableUserModalComponent;
  let fixture: ComponentFixture<DisableUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
