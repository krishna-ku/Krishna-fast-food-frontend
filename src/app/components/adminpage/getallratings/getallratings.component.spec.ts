import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallratingsComponent } from './getallratings.component';

describe('GetallratingsComponent', () => {
  let component: GetallratingsComponent;
  let fixture: ComponentFixture<GetallratingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallratingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
