import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpConfimationComponent } from './otp-confimation.component';

describe('OtpConfimationComponent', () => {
  let component: OtpConfimationComponent;
  let fixture: ComponentFixture<OtpConfimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpConfimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
