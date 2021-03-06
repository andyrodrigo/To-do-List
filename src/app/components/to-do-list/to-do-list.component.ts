import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interfaces/to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos: Array<ToDo> = [];
  todo: ToDo = {
    id: 0,
    titulo: '',
    feito:  false
  }

  constructor() { }

  ngOnInit(): void {
    let itens: any = localStorage.getItem('todos');
    let todos = JSON.parse( itens )
    if(!todos){
      this.todos = [{id: 1, titulo: "ovo", feito: false }];
    }else{
      this.todos = todos;
    }
  }

  addTodo(titulo: string){
    const id = this.todos.length + 1;
    this.todos.push({
      id: id,
      titulo: titulo,
      feito: false
    })
    localStorage.setItem('todos', JSON.stringify(this.todos) )
  }

  removeTodo(todo: any){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos) )
  }

}
