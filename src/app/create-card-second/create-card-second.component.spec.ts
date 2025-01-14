import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardSecondComponent } from './create-card-second.component';

describe('CreateCardSecondComponent', () => {
  let component: CreateCardSecondComponent;
  let fixture: ComponentFixture<CreateCardSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCardSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCardSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
