import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([
    {
      message: 'Faire les courses',
      done: false,
    }
  ])

  constructor() { }

  public addTodo(todo: Todo) {
    this.todos$.next([...this.todos$.value, todo]);
  }

  public deleteTodo(index: number) {
    this.todos$.next(this.todos$.value.filter((v, i) => i !== index));
  }

  public toggleTodo(index: number) {
    const currentTodos = this.todos$.value;
    currentTodos[index].done = !currentTodos[index].done;
    this.todos$.next(currentTodos);
  }
}
