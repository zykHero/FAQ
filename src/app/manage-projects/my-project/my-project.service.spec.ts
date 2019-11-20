import { TestBed } from '@angular/core/testing';

import { MyProjectService } from './my-project.service';

describe('MyProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyProjectService = TestBed.get(MyProjectService);
    expect(service).toBeTruthy();
  });
});
