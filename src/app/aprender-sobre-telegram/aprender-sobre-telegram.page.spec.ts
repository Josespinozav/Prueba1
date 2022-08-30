import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprenderSobreTelegramPage } from './aprender-sobre-telegram.page';

describe('AprenderSobreTelegramPage', () => {
  let component: AprenderSobreTelegramPage;
  let fixture: ComponentFixture<AprenderSobreTelegramPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AprenderSobreTelegramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprenderSobreTelegramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
