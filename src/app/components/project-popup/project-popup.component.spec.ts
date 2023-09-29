import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPopupComponent } from './project-popup.component';

describe('ProjectPopupComponent', () => {
  let component: ProjectPopupComponent;
  let fixture: ComponentFixture<ProjectPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectPopupComponent]
    });
    fixture = TestBed.createComponent(ProjectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
