import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenretvComponent } from './genretv.component';

describe('GenretvComponent', () => {
  let component: GenretvComponent;
  let fixture: ComponentFixture<GenretvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenretvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenretvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
