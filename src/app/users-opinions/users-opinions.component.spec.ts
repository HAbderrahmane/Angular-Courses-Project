import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOpinionsComponent } from './users-opinions.component';

describe('UsersOpinionsComponent', () => {
  let component: UsersOpinionsComponent;
  let fixture: ComponentFixture<UsersOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersOpinionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
