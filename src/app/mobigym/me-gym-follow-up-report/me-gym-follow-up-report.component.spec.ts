import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeGymFollowUpReportComponent } from './me-gym-follow-up-report.component';

describe('MeGymFollowUpReportComponent', () => {
  let component: MeGymFollowUpReportComponent;
  let fixture: ComponentFixture<MeGymFollowUpReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeGymFollowUpReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeGymFollowUpReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
