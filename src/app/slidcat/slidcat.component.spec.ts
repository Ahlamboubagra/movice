import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidcatComponent } from './slidcat.component';

describe('SlidcatComponent', () => {
  let component: SlidcatComponent;
  let fixture: ComponentFixture<SlidcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidcatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
