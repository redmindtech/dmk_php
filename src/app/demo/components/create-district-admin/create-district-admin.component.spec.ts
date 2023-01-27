import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDistrictAdminComponent } from './create-district-admin.component';

describe('CreateDistrictAdminComponent', () => {
  let component: CreateDistrictAdminComponent;
  let fixture: ComponentFixture<CreateDistrictAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDistrictAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDistrictAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
