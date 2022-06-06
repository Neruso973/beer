import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbeersComponent } from './addbeers.component';

describe('AddbeersComponent', () => {
  let component: AddbeersComponent;
  let fixture: ComponentFixture<AddbeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
