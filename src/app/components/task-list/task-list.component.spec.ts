import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TaskListComponent } from './task-list.component';
import {
  FormArray,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TaskboardService } from 'src/app/services/taskboard.service';
import { By } from '@angular/platform-browser';

const TODOLIST_MOCKS: any = {
  todos: [
    {
      id: 1,
      todo: 'Do something nice for someone I care about',
      completed: true,
      userId: 26,
    },
    {
      id: 2,
      todo: 'Memorize the fifty states and their capitals',
      completed: true,
      userId: 48,
    },
    { id: 3, todo: 'Watch a classic movie', completed: false, userId: 4 },
    {
      id: 4,
      todo: 'Contribute code or a monetary donation',
      completed: false,
      userId: 48,
    },
  ],
  total: 150,
  skip: 0,
  limit: 4,
};

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let service: TaskboardService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule],
      declarations: [TaskListComponent],
    }).compileComponents();
    service = TestBed.inject(TaskboardService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.todoListform = new FormGroup({
      todoListArr: new FormArray([]),
    });
    fixture.detectChanges();
  });

  it('should check the component', () => {
    expect(component).toBeTruthy();
  });

  it('should check the header text', () => {
    const headerText = fixture.debugElement.query(By.css('.donelist-header'));
    const headerTododText = fixture.debugElement.query(
      By.css('.todolist-header')
    );
    fixture.detectChanges();
    expect(headerText).toBeTruthy();
    expect(headerTododText).toBeFalsy();
    expect(headerText.nativeElement.textContent.trim()).toBe('I did it!');
  });

  it('should call getToDoCheckList', () => {
    const req = service.getToDoCheckList(4).subscribe((data) => {
      expect(data).toBe(TODOLIST_MOCKS);
      expect(component.doneList).toEqual([
        TODOLIST_MOCKS.todos[0],
        TODOLIST_MOCKS.todos[1],
      ]);
      expect(component.todoList).toEqual([
        TODOLIST_MOCKS.todos[2],
        TODOLIST_MOCKS.todos[3],
      ]);
      expect(component.addtodoListCheckBox).toHaveBeenCalled();
    });
    expect(req).toBeTruthy();
  });
});
