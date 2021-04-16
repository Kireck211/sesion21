import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos = [];
  todo = '';
  subscription: Subscription;
  @ViewChild('input') input: ElementRef;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.subscription = this.todoService.getToDoSubject().subscribe({
      next: (todos => this.todos = [...todos])
    });
    this.todos = this.todoService.getCurrentTodos();
  }

  addNewTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = '';
    this.input.nativeElement.focus();
  }

  changeTodo(event: Event) {
    this.todo = (<HTMLInputElement>event.target).value;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
