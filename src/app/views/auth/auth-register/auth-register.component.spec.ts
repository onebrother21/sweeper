import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthRegisterComponent } from './auth-register.component';

describe('AuthRegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthRegisterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'auth-register'`, () => {
    const fixture = TestBed.createComponent(AuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('auth-register');
  });
});
