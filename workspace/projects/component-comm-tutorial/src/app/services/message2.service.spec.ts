import { TestBed } from '@angular/core/testing';

import { Message2Service } from './message2.service';

describe('Message2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Message2Service = TestBed.get(Message2Service);
    expect(service).toBeTruthy();
  });
});
