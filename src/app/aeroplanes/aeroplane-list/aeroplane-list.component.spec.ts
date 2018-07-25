import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneListComponent } from './aeroplane-list.component';

describe('AeroplaneListComponent', () => {
  let component: AeroplaneListComponent;
  let fixture: ComponentFixture<AeroplaneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
