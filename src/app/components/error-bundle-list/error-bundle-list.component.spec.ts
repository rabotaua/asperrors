import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBundleListComponent } from './error-bundle-list.component';

describe('ErrorBundleListComponent', () => {
  let component: ErrorBundleListComponent;
  let fixture: ComponentFixture<ErrorBundleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorBundleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorBundleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
