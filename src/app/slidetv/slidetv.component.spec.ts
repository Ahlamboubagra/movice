import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidetvComponent } from './slidetv.component';

describe('SlidetvComponent', () => {
  let component: SlidetvComponent;
  let fixture: ComponentFixture<SlidetvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidetvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
