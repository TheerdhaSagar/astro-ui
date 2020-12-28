import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VastuComponent } from './vastu.component';

describe('VastuComponent', () => {
  let component: VastuComponent;
  let fixture: ComponentFixture<VastuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VastuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VastuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
