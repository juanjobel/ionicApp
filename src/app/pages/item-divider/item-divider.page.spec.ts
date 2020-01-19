import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemDividerPage } from './item-divider.page';

describe('ItemDividerPage', () => {
  let component: ItemDividerPage;
  let fixture: ComponentFixture<ItemDividerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDividerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDividerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
