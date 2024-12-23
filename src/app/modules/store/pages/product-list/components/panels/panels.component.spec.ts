import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { PanelsComponent } from './panels.component';

describe('PanelsComponent', () => {
  let component: PanelsComponent;
  let fixture: ComponentFixture<PanelsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PanelsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
