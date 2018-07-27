import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneTypeDetailComponent } from './aeroplane-type-detail.component';

describe('AeroplaneTypeDetailComponent', () => {
  let component: AeroplaneTypeDetailComponent;
  let fixture: ComponentFixture<AeroplaneTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
