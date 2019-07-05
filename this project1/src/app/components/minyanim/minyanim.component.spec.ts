import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinyanimComponent } from './minyanim.component';

describe('MinyanimComponent', () => {
  let component: MinyanimComponent;
  let fixture: ComponentFixture<MinyanimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinyanimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinyanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
