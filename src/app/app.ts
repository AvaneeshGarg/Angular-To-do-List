import { Component, NgModule } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ToDos } from "./MyComponent/to-dos/to-dos";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'cwh-todo-list';
  constructor(){
    // setTimeout(() => {
    // this.title="New Title";
    // }, 3000);
  }
}
