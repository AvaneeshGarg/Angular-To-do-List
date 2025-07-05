import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ToDo } from '../../todo';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
  imports: [CommonModule]
})
export class TodoItem implements OnInit {
  @Input() todo!: ToDo;
  @Input() i!:number;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<ToDo> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
      
  }
  OnClick(){
    this.todoDelete.emit(this.todo);
    console.log("OnClick has been triggered")
  }

  onCheckClick(todo: ToDo){
    this.todoCheckBox.emit(todo);
  }
}

