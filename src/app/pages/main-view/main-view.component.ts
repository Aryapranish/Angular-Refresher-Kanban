import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'Some ideas',
      'Another Random Idea',
      'Plus one idea',
      'Infinite Ideas',
    ]),
    new Column('Research', [
      'reasearch one',
      'reasearch two',
      'reasearch three',
      'reasearch four',
    ]),
    new Column('Todo', ['Todo one', 'Todo two', 'Todo three', 'Todo four']),
    new Column('Done', ['Done one', 'Done two', 'Done three', 'Done four']),
  ]);
  ngOnInit(): void {}

  //Adding drag drop feature from angular cdk
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
