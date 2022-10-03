import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadapiComponent } from './launchpadapi.component';

describe('LaunchpadapiComponent', () => {
  let component: LaunchpadapiComponent;
  let fixture: ComponentFixture<LaunchpadapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchpadapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchpadapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
