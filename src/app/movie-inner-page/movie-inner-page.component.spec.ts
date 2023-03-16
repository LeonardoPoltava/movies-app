import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInnerPageComponent } from './movie-inner-page.component';

describe('MovieInnerPageComponent', () => {
  let component: MovieInnerPageComponent;
  let fixture: ComponentFixture<MovieInnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInnerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
