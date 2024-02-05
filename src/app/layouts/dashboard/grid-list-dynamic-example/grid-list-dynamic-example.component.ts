import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

/**
 * @title Basic grid-list
 */


@Component({
  selector: 'grid-list-overview-example',
  styleUrls: ['grid-list-overview-example.css'],
  templateUrl: './grid-list-overview-example.html',
  standalone: true,
  imports: [MatGridListModule],
})
export class GridListOverviewExample {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
