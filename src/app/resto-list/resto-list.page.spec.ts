import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoListPage } from './resto-list.page';

describe('RestoListPage', () => {
  let component: RestoListPage;
  let fixture: ComponentFixture<RestoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
