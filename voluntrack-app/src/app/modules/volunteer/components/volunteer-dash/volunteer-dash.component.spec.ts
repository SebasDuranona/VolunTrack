import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDashComponent } from './volunteer-dash.component';

describe('VolunteerDashComponent', () => {
  let component: VolunteerDashComponent;
  let fixture: ComponentFixture<VolunteerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
