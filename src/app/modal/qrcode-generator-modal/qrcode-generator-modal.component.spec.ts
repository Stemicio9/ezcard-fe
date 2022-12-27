import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeGeneratorModalComponent } from './qrcode-generator-modal.component';

describe('QrcodeGeneratorModalComponent', () => {
  let component: QrcodeGeneratorModalComponent;
  let fixture: ComponentFixture<QrcodeGeneratorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeGeneratorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrcodeGeneratorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
