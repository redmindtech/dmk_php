import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfficeBearersComponent } from './create-office-bearers.component';

describe('CreateOfficeBearersComponent', () => {
  let component: CreateOfficeBearersComponent;
  let fixture: ComponentFixture<CreateOfficeBearersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOfficeBearersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOfficeBearersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
