import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContainerPartnerComponent } from './profile-container-partner.component';

describe('ProfileContainerPartnerComponent', () => {
  let component: ProfileContainerPartnerComponent;
  let fixture: ComponentFixture<ProfileContainerPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContainerPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContainerPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
