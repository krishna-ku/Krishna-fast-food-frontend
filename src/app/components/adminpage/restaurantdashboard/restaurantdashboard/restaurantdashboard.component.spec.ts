import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantdashboardComponent } from './restaurantdashboard.component';

describe('RestaurantdashboardComponent', () => {
  let component: RestaurantdashboardComponent;
  let fixture: ComponentFixture<RestaurantdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
