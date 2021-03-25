import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrentoparentComponent } from './childrentoparent.component';

describe('ChildrentoparentComponent', () => {
  let component: ChildrentoparentComponent;
  let fixture: ComponentFixture<ChildrentoparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrentoparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrentoparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
