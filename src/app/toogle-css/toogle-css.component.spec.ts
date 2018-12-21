import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleCssComponent } from './toogle-css.component';

describe('ToogleCssComponent', () => {
  let component: ToogleCssComponent;
  let fixture: ComponentFixture<ToogleCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
