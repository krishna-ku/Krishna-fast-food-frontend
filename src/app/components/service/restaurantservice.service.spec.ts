import { TestBed } from '@angular/core/testing';

import { RestaurantserviceService } from './restaurantservice.service';

describe('RestaurantserviceService', () => {
  let service: RestaurantserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
