import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateAdminComponent } from './authenticate-admin.component';

describe('AuthenticateAdminComponent', () => {
  let component: AuthenticateAdminComponent;
  let fixture: ComponentFixture<AuthenticateAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticateAdminComponent]
    });
    fixture = TestBed.createComponent(AuthenticateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
