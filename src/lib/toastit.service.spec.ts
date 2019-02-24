import { TestBed } from '@angular/core/testing';

import { ToastitService } from './toastit.service';

describe('ToastitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastitService = TestBed.get(ToastitService);
    expect(service).toBeTruthy();
  });
});
