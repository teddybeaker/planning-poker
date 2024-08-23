import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PlanningPokerService} from "./services/planning-poker.service";
import {of} from "rxjs";

describe('AppComponent', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let serviceSpy: any;
  beforeEach(async () => {
    const spy = {getData: jest.fn()};
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{provide: PlanningPokerService, useValue: spy}],
    }).compileComponents();
    serviceSpy = TestBed.inject(PlanningPokerService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render backend data', () => {
    // given
    const backendResponse = 'something';
    serviceSpy.getData.mockReturnValue(of(backendResponse));
    const fixture = TestBed.createComponent(AppComponent);

    // when
    fixture.detectChanges();

    // then
    expect(serviceSpy.getData).toHaveBeenCalledTimes(1);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(backendResponse);
  });
});
