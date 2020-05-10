import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderAndCartserviceComponent } from './get-order-and-cartservice.component';

describe('GetOrderAndCartserviceComponent', () => {
  let component: GetOrderAndCartserviceComponent;
  let fixture: ComponentFixture<GetOrderAndCartserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOrderAndCartserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrderAndCartserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
