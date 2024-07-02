import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSComponent } from './project-s.component';

describe('ProjectSComponent', () => {
  let component: ProjectSComponent;
  let fixture: ComponentFixture<ProjectSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
