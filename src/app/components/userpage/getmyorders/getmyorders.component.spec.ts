import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmyordersComponent } from './getmyorders.component';

describe('GetmyordersComponent', () => {
  let component: GetmyordersComponent;
  let fixture: ComponentFixture<GetmyordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmyordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetmyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
