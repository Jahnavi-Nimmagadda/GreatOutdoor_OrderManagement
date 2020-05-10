import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrderProductMapentityComponent } from './delete-order-product-mapentity.component';

describe('DeleteOrderProductMapentityComponent', () => {
  let component: DeleteOrderProductMapentityComponent;
  let fixture: ComponentFixture<DeleteOrderProductMapentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrderProductMapentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrderProductMapentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
