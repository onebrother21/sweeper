import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IconMenuItemComponent } from './icon-menu-item.component';

describe('IconMenuItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IconMenuItemComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IconMenuItemComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'icon-menu-item'`, () => {
    const fixture = TestBed.createComponent(IconMenuItemComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('icon-menu-item');
  });
});
