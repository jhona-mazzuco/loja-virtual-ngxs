import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQtyControlComponent } from './item-qty-control.component';

describe('ItemQtyControlComponent', () => {
  let component: ItemQtyControlComponent;
  let fixture: ComponentFixture<ItemQtyControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemQtyControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemQtyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
