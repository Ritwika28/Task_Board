import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskboardService } from 'src/app/services/taskboard.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoListCategory } from 'src/app/model/todoList.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  constructor(
    private taskboardService: TaskboardService,
    private fb: FormBuilder
  ) {}
  todoList: Array<TodoListCategory> = [];
  todoListform: FormGroup = new FormGroup({});
  doneList: Array<TodoListCategory> = [];
  subscription1!: Subscription;
  subscription2!: Subscription;
  limitListCount: number = 10;
  ngOnInit(): void {
    this.subscription1 = this.taskboardService
      .getToDoCheckList(this.limitListCount)
      .subscribe((data) => {
        data.todos.map((todo: TodoListCategory) => {
          todo.completed ? this.doneList.push(todo) : this.todoList.push(todo);
        });
        this.addtodoListCheckBox();
      });

    this.todoListform = this.fb.group({
      todoListArr: this.fb.array([]),
    });

    this.subscription2 = this.todoFormArray.valueChanges.subscribe(
      (todoListCheck) => {
        todoListCheck
          .map((value: TodoListCategory, i: number) => {
            if (value.completed) {
              this.doneList.push(value);
              this.todoCheckedFunc(i);
            }
          })
          .filter((value: TodoListCategory) => !!value);
      }
    );
  }

  todoCheckedFunc(i: number) {
    setTimeout(() => {
      this.todoFormArray.removeAt(i);
      this.todoList.splice(i, 1);
    }, 200);
  }

  get todoFormArray() {
    return this.todoListform.controls.todoListArr as FormArray;
  }

  addtodoListCheckBox() {
    this.todoList.forEach((item) =>
      this.todoFormArray.push(
        this.fb.group({
          id: item.id,
          todo: item.todo,
          completed: this.fb.control(false),
          userId: item.userId,
        })
      )
    );
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
