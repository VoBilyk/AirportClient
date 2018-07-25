import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneDetailComponent } from './aeroplane-detail.component';

describe('AeroplaneDetailComponent', () => {
  let component: AeroplaneDetailComponent;
  let fixture: ComponentFixture<AeroplaneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
