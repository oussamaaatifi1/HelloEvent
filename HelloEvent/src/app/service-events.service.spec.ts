import { TestBed } from '@angular/core/testing';

import { ServiceEventsService } from './service-events.service';

describe('ServiceEventsService', () => {
  let service: ServiceEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
