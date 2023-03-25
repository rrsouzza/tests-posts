import { TestBed } from '@angular/core/testing';

import { CustomSubscriptionService } from './custom-subscription.service';

describe('SubscriptionService', () => {
  let service: CustomSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
