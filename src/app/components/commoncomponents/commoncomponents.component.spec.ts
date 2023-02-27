import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncomponentsComponent } from './commoncomponents.component';

describe('CommoncomponentsComponent', () => {
  let component: CommoncomponentsComponent;
  let fixture: ComponentFixture<CommoncomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommoncomponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommoncomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
