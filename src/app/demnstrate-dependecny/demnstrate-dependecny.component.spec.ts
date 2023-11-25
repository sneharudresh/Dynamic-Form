import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemnstrateDependecnyComponent } from './demnstrate-dependecny.component';

describe('DemnstrateDependecnyComponent', () => {
  let component: DemnstrateDependecnyComponent;
  let fixture: ComponentFixture<DemnstrateDependecnyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemnstrateDependecnyComponent]
    });
    fixture = TestBed.createComponent(DemnstrateDependecnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
