import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-dream-app';
  listItems: string[] = [];

  // Listen for the onTodoCreated Event and run a function inside this component to add it to the todos....
  handleCreate(item) {
    if (item.length > 0) {
      this.listItems.push(item);
    }
    else return;
  }

  // Listen for the todoToDelete Event and run a function inside this component to add it to the todos
  handleDelete(item) {
    // list items = filtered list items by i as long as i != item
    this.listItems = this.listItems.filter((i) => i !== item);
  }
}
