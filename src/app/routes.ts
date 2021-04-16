import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoItemComponent } from './todo-item/todo-item.component'
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AnotherSecretComponent } from './another-secret/another-secret.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
  { path: 'another-secret', component: AnotherSecretComponent, canActivate: [AuthGuard] },
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/:id', component: TodoItemComponent }
]