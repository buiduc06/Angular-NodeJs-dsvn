import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacquydinhComponent } from './cacquydinh.component';

describe('CacquydinhComponent', () => {
  let component: CacquydinhComponent;
  let fixture: ComponentFixture<CacquydinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacquydinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacquydinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
