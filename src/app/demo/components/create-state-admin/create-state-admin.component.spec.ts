import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStateAdminComponent } from './create-state-admin.component';

describe('CreateStateAdminComponent', () => {
  let component: CreateStateAdminComponent;
  let fixture: ComponentFixture<CreateStateAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStateAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
