import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrderDetailsComponent } from './delete-order-details.component';

describe('DeleteOrderDetailsComponent', () => {
  let component: DeleteOrderDetailsComponent;
  let fixture: ComponentFixture<DeleteOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
