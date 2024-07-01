import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFormComponent } from './creation-form.component';

describe('CreationFormComponent', () => {
  let component: CreationFormComponent;
  let fixture: ComponentFixture<CreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
