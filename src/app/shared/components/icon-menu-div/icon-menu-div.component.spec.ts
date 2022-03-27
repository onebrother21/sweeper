import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IconMenuDivComponent } from './icon-menu-div.component';

describe('IconMenuDivComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IconMenuDivComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(IconMenuDivComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
