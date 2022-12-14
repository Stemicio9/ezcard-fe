import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileContainerCompanyComponent} from './profile-container-company.component';

describe('CompanyProfileContainerComponent', () => {
  let component: ProfileContainerCompanyComponent;
  let fixture: ComponentFixture<ProfileContainerCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContainerCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContainerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
