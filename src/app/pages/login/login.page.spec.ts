import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should go to home', () => {
    spyOn(router, 'navigate')

    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
  it('should go to register', () => {
    spyOn(router, 'navigate')

    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
