import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileContainerPresentationComponent} from './profile-container-presentation.component';

describe('ProfileContainerPresentationComponent', () => {
  let component: ProfileContainerPresentationComponent;
  let fixture: ComponentFixture<ProfileContainerPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContainerPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContainerPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
