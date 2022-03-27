import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterTwoComponent } from './footer-two.component';

describe('FooterTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FooterTwoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'footer-two'`, () => {
    const fixture = TestBed.createComponent(FooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('footer-two');
  });
});
