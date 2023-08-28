import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutoupComponent } from './youtoup.component';

describe('YoutoupComponent', () => {
  let component: YoutoupComponent;
  let fixture: ComponentFixture<YoutoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutoupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
