import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  itemText: string;

  // Get the TODO items passed down as Inputs from App
  @Input() list: string[];
  @Output() onItemDeleted = new EventEmitter();

  constructor() {}

  // Equivalent of componentDidMount from react
  ngOnInit(): void {}

  handleDelete(item) {
    const todoToDelete = item;
    this.onItemDeleted.emit(todoToDelete);
  }
}
