import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMovieComponent } from './buy-movie.component';

describe('BuyMovieComponent', () => {
  let component: BuyMovieComponent;
  let fixture: ComponentFixture<BuyMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
