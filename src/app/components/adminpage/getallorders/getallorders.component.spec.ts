import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallordersComponent } from './getallorders.component';

describe('GetallordersComponent', () => {
  let component: GetallordersComponent;
  let fixture: ComponentFixture<GetallordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
