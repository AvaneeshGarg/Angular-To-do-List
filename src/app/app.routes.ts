import { Routes } from '@angular/router';
import { ToDos } from './MyComponent/to-dos/to-dos';
import { About } from './MyComponent/about/about';

export const routes: Routes = [
{ path: '', component: ToDos},
  { path: 'about', component: About },
];
