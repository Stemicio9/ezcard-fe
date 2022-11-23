import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDarkComponent } from './profile-dark.component';

describe('ProfileDarkComponent', () => {
  let component: ProfileDarkComponent;
  let fixture: ComponentFixture<ProfileDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
