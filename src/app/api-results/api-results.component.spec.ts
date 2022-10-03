import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResultsComponent } from './api-results.component';

describe('ApiResultsComponent', () => {
  let component: ApiResultsComponent;
  let fixture: ComponentFixture<ApiResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
