import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PlanningPokerService} from "./services/planning-poker.service";
import {of} from "rxjs";

describe('AppComponent', () => {
  let serviceSpy: jasmine.SpyObj<PlanningPokerService>;
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PlanningPokerService', ['getData']);
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{provide: PlanningPokerService, useValue: spy}],
    }).compileComponents();
    serviceSpy = TestBed.inject(PlanningPokerService) as jasmine.SpyObj<PlanningPokerService>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render backend data', () => {
    // given
    const backendResponse = 'something';
    serviceSpy.getData.and.returnValue(of(backendResponse));
    const fixture = TestBed.createComponent(AppComponent);

    // when
    fixture.detectChanges();

    // then
    expect(serviceSpy.getData.calls.count()).toBe(1);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(backendResponse);
  });
});
