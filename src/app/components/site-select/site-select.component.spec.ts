import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSelectComponent } from './site-select.component';

describe('SiteSelectComponent', () => {
  let component: SiteSelectComponent;
  let fixture: ComponentFixture<SiteSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
