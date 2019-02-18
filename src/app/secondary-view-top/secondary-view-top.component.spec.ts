import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryViewTopComponent } from './secondary-view-top.component';

describe('SecondaryViewTopComponent', () => {
  let component: SecondaryViewTopComponent;
  let fixture: ComponentFixture<SecondaryViewTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryViewTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryViewTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
