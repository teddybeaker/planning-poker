import { PlanningPokerService } from './planning-poker.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('PlanningPokerService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: PlanningPokerService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PlanningPokerService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return server response', (done: DoneFn) => {
    // given
    const backendResponse = 'backendResponse';
    httpClientSpy.get.and.returnValue(of(backendResponse));

    // when
    service.getData().subscribe({
      next: (response) => {
        // then
        expect(response).toEqual(backendResponse);
        done();
      },
      error: done.fail
    });

    // then
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
