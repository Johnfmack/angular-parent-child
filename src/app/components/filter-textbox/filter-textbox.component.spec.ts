import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTextboxcomponentComponent } from './filter-textbox.component';

describe('FilterTextboxcomponentComponent', () => {
  let component: FilterTextboxcomponentComponent;
  let fixture: ComponentFixture<FilterTextboxcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTextboxcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTextboxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
