import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBillSComponent } from './get-all-bill-s.component';

describe('GetAllBillSComponent', () => {
  let component: GetAllBillSComponent;
  let fixture: ComponentFixture<GetAllBillSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBillSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllBillSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
