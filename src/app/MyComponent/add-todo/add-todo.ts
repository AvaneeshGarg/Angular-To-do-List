import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from '../../todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodo implements OnInit{
  title!:string;
  desc!:string;
  category: string = 'Personal';
  categories: string[] = ['Work', 'Personal', 'Study', 'Today', 'This Week'];
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();

  constructor(){

  }


  ngOnInit(): void {
      
  }
  onSubmit(){
    const todo = new ToDo(
      0, // sno will be set in the parent component
      this.title,
      this.desc,
      true,
      this.category
    );
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
    this.category = 'Personal';
  }
}
