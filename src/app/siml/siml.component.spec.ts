import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimlComponent } from './siml.component';

describe('SimlComponent', () => {
  let component: SimlComponent;
  let fixture: ComponentFixture<SimlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
