import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPlansComponent } from './news-plans.component';

describe('NewsPlansComponent', () => {
  let component: NewsPlansComponent;
  let fixture: ComponentFixture<NewsPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
