import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumComponent } from './num.component';

describe('NumComponent', () => {
  let component: NumComponent;
  let fixture: ComponentFixture<NumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
