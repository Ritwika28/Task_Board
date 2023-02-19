import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TaskboardService } from './taskboard.service';

describe('TaskboardService', () => {
  let service: TaskboardService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskboardService],
    });
    service = TestBed.inject(TaskboardService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getToDoCheckList', () => {
    it('should call get with correct url', () => {
      service.getToDoCheckList(30).subscribe();
      const req = httpTestingController.expectOne(
        `https://dummyjson.com/todos?limit=30`
      );
      expect(req).toBeTruthy();
    });
  });
});
