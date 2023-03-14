import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvennementComponent } from './evennement.component';

describe('EvennementComponent', () => {
  let component: EvennementComponent;
  let fixture: ComponentFixture<EvennementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvennementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvennementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
