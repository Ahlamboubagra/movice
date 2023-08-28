import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutComponent } from './yout.component';

describe('YoutComponent', () => {
  let component: YoutComponent;
  let fixture: ComponentFixture<YoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
