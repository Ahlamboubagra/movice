import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidesComponent } from './vides.component';

describe('VidesComponent', () => {
  let component: VidesComponent;
  let fixture: ComponentFixture<VidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
