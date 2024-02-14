import { TestBed } from '@angular/core/testing';

import { ApiProductsServiceService } from './api-products-service.service';

describe('ApiProductsServiceService', () => {
  let service: ApiProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
