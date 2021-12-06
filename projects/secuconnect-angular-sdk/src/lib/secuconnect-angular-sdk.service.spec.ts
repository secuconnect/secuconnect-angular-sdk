import { TestBed } from '@angular/core/testing';

import { SecuconnectAngularSdkService } from './secuconnect-angular-sdk.service';

describe('SecuconnectAngularSdkService', () => {
  let service: SecuconnectAngularSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuconnectAngularSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
