import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieoComponent } from './vieo.component';

describe('VieoComponent', () => {
  let component: VieoComponent;
  let fixture: ComponentFixture<VieoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
