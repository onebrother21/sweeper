import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthSignUpComponent } from './auth-signup.component';

describe('AuthSignUpComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthSignUpComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthSignUpComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'auth-signup'`, () => {
    const fixture = TestBed.createComponent(AuthSignUpComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('auth-signup');
  });
});
