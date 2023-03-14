import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasmusplusComponent } from './erasmusplus.component';

describe('ErasmusplusComponent', () => {
  let component: ErasmusplusComponent;
  let fixture: ComponentFixture<ErasmusplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErasmusplusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErasmusplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
