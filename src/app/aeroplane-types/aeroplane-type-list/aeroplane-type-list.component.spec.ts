import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneTypeListComponent } from './aeroplane-type-list.component';

describe('AeroplaneTypeListComponent', () => {
  let component: AeroplaneTypeListComponent;
  let fixture: ComponentFixture<AeroplaneTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
