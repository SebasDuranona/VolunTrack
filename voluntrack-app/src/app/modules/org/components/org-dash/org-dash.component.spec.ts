import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDashComponent } from './org-dash.component';

describe('OrgDashComponent', () => {
  let component: OrgDashComponent;
  let fixture: ComponentFixture<OrgDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
