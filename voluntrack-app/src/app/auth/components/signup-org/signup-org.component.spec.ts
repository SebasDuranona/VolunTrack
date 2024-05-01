import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOrgComponent } from './signup-org.component';

describe('SignupOrgComponent', () => {
  let component: SignupOrgComponent;
  let fixture: ComponentFixture<SignupOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupOrgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
