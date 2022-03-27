import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PicAndPostComponent } from './pic-and-post.component';

describe('PicAndPostComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PicAndPostComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PicAndPostComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'pic-and-post'`, () => {
    const fixture = TestBed.createComponent(PicAndPostComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('pic-and-post');
  });
});
