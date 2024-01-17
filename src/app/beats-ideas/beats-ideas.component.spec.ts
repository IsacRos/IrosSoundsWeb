import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsIdeasComponent } from './beats-ideas.component';

describe('BeatsIdeasComponent', () => {
  let component: BeatsIdeasComponent;
  let fixture: ComponentFixture<BeatsIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatsIdeasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatsIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
