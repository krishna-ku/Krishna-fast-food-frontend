import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveratingComponent } from './giverating.component';

describe('GiveratingComponent', () => {
  let component: GiveratingComponent;
  let fixture: ComponentFixture<GiveratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
