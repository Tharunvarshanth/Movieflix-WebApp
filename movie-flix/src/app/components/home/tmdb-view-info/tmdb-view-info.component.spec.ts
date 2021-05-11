import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbViewInfoComponent } from './tmdb-view-info.component';

describe('TmdbViewInfoComponent', () => {
  let component: TmdbViewInfoComponent;
  let fixture: ComponentFixture<TmdbViewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmdbViewInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
