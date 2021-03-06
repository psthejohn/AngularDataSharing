import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttochildrenComponent } from './parenttochildren.component';

describe('ParenttochildrenComponent', () => {
  let component: ParenttochildrenComponent;
  let fixture: ComponentFixture<ParenttochildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttochildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttochildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
