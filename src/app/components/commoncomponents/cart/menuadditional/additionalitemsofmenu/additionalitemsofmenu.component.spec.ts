import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalitemsofmenuComponent } from './additionalitemsofmenu.component';

describe('AdditionalitemsofmenuComponent', () => {
  let component: AdditionalitemsofmenuComponent;
  let fixture: ComponentFixture<AdditionalitemsofmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalitemsofmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalitemsofmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
