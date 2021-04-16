import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
  todo: string;

  constructor(private todosService: TodosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const index = this.route.snapshot.params['id'] || 0;
    this.todo = this.todosService.getCurrentTodos()[index];
  }
}
