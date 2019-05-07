import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resto1Page } from './resto1.page';

describe('Resto1Page', () => {
  let component: Resto1Page;
  let fixture: ComponentFixture<Resto1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resto1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resto1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
