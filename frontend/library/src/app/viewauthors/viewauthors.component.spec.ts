import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewauthorsComponent } from './viewauthors.component';

describe('ViewauthorsComponent', () => {
  let component: ViewauthorsComponent;
  let fixture: ComponentFixture<ViewauthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewauthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
