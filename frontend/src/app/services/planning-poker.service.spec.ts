import { PlanningPokerService } from './planning-poker.service';
import {of} from 'rxjs';

describe('PlanningPokerService', () => {
  let httpClientSpy:any;
  let service: PlanningPokerService;

  beforeEach(() => {
    httpClientSpy = {get: jest.fn()};
    service = new PlanningPokerService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return server response', (done) => {
    // given
    const backendResponse = 'backendResponse';
    httpClientSpy.get.mockReturnValue(of(backendResponse));

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
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
