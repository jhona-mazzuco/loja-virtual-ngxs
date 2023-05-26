import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSuggentionsComponent } from './item-suggentions.component';

describe('ItemSuggentionsComponent', () => {
  let component: ItemSuggentionsComponent;
  let fixture: ComponentFixture<ItemSuggentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSuggentionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSuggentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
