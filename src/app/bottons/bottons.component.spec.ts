import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonsComponent } from './bottons.component';

describe('BottonsComponent', () => {
  let component: BottonsComponent;
  let fixture: ComponentFixture<BottonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
