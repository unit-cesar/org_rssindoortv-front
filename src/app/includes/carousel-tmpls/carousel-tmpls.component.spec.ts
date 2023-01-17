import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTmplsComponent } from './carousel-tmpls.component';

describe('CarouselTmplsComponent', () => {
  let component: CarouselTmplsComponent;
  let fixture: ComponentFixture<CarouselTmplsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselTmplsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselTmplsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
