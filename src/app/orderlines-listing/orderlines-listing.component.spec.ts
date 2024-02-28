import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlinesListingComponent } from './orderlines-listing.component';

describe('OrderlinesListingComponent', () => {
  let component: OrderlinesListingComponent;
  let fixture: ComponentFixture<OrderlinesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlinesListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderlinesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
