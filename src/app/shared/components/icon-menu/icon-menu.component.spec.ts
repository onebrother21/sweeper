import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IconMenuComponent } from './icon-menu.component';

describe('IconMenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IconMenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IconMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'icon-menu'`, () => {
    const fixture = TestBed.createComponent(IconMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('icon-menu');
  });
});
