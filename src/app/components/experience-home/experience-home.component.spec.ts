import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHomeComponent } from './experience-home.component';

describe('ExperienceHomeComponent', () => {
  let component: ExperienceHomeComponent;
  let fixture: ComponentFixture<ExperienceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
