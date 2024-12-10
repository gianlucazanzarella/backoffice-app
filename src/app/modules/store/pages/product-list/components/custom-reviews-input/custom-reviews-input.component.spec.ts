import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { CustomReviewsInputComponent } from './custom-reviews-input.component';

describe('CustomReviewsInputComponent', () => {
  let component: CustomReviewsInputComponent;
  let fixture: ComponentFixture<CustomReviewsInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CustomReviewsInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomReviewsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
