import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFilmeComponent } from './banner-filme.component';

describe('BannerFilmeComponent', () => {
  let component: BannerFilmeComponent;
  let fixture: ComponentFixture<BannerFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
