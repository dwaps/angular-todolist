import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './shared/models/todo';
import { TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputMessage') inputMessage: ElementRef;

  public todos$: Observable<Todo[]> = this.todoService.todos$.asObservable();
  public message: string;

  constructor(private todoService: TodoService) {}

  public addTodo() {
    this.todoService.addTodo({message: this.message, done: false});
    this.inputMessage.nativeElement.value = '';
  }

  public deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }

  public toggleTodo(index: number) {
    this.todoService.toggleTodo(index);
  }
}
