import { TestBed } from '@angular/core/testing';
import { ShopownerService } from './Shopowner1.service';

describe('shopownerService', () => {
  let service: ShopownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopownerService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
