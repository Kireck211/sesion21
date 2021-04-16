import { Injectable } from '@angular/core'
import { observable, Observable, Subject } from 'rxjs';

Injectable()
export class TodosService {
  todos = ['Create Angular app', 'Eat breakfast'];
  subject: Subject<any> = new Subject()

  getToDoSubject() {
    return this.subject;
  }

  getCurrentTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.subject.next(this.todos);
  }
}