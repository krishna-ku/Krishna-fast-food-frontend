import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmyratingsComponent } from './getmyratings.component';

describe('GetmyratingsComponent', () => {
  let component: GetmyratingsComponent;
  let fixture: ComponentFixture<GetmyratingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmyratingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetmyratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
