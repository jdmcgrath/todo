import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  searchText: string;

  @Output() onItemCreated = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleCreate() {
    // Get the text from the input box
    const todoToSave = this.searchText;
    this.searchText = '';
    // Emit an event to the parent with the text/todo which was added
    this.onItemCreated.emit(todoToSave);
  }
}
