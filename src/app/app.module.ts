import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { ToastrService } from './shared/toastr.service';
import { TodosService } from './shared/todos.service'
import { AuthGuard } from './shared/auth-guard.service'
import { AuthService } from './shared/auth.service'
import { TickService } from './shared/tick.service'

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { TodoItemComponent } from './todo-item/todo-item.component'
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AnotherSecretComponent } from './another-secret/another-secret.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    TodoItemComponent,
    LoginComponent,
    SecretComponent,
    AnotherSecretComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ToastrService, TodosService, AuthGuard, AuthService, TickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
