import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinhanhtrinhComponent } from './thongtinhanhtrinh.component';

describe('ThongtinhanhtrinhComponent', () => {
  let component: ThongtinhanhtrinhComponent;
  let fixture: ComponentFixture<ThongtinhanhtrinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinhanhtrinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinhanhtrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
