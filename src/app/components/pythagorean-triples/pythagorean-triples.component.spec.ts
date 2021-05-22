/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PythagoreanTriplesComponent } from './pythagorean-triples.component';

describe('PythagoreanTriplesComponent', () => {
  let component: PythagoreanTriplesComponent;
  let fixture: ComponentFixture<PythagoreanTriplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythagoreanTriplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythagoreanTriplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
