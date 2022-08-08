import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoFilmeComponent } from './descricao-filme.component';

describe('DescricaoFilmeComponent', () => {
  let component: DescricaoFilmeComponent;
  let fixture: ComponentFixture<DescricaoFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
