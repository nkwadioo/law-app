import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHelpComponent } from './our-help.component';

describe('OurHelpComponent', () => {
  let component: OurHelpComponent;
  let fixture: ComponentFixture<OurHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
