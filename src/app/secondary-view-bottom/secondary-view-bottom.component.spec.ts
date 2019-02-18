import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryViewBottomComponent } from './secondary-view-bottom.component';

describe('SecondaryViewBottomComponent', () => {
  let component: SecondaryViewBottomComponent;
  let fixture: ComponentFixture<SecondaryViewBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryViewBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryViewBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
