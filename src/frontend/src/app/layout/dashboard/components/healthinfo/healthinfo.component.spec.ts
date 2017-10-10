import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthinfoComponent } from './healthinfo.component';

describe('HealthinfoComponent', () => {
  let component: HealthinfoComponent;
  let fixture: ComponentFixture<HealthinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
