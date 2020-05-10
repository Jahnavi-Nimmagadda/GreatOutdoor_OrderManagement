import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromCartDetailsComponent } from './remove-from-cart-details.component';

describe('RemoveFromCartDetailsComponent', () => {
  let component: RemoveFromCartDetailsComponent;
  let fixture: ComponentFixture<RemoveFromCartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFromCartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
