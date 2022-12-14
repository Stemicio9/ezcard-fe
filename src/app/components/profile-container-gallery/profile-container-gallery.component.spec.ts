import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileContainerGalleryComponent} from './profile-container-gallery.component';

describe('ProfileContainerGalleryComponent', () => {
  let component: ProfileContainerGalleryComponent;
  let fixture: ComponentFixture<ProfileContainerGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContainerGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContainerGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
