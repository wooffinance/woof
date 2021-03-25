import {Component, Input, OnInit} from '@angular/core';
export interface Tile {
  image: string;
  color: string;
  cols: number;
  rows: number;
  name: string;
  breed: string;
  age: string;
  neutered: string;
  vaccinated: string;
  chipped: string;
  sex: string;
  size: string;
  description: string;
}
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() show: boolean;
  public isMobile: boolean = false;
  tiles: Tile[] = [
    {image:'/assets/images/harleyshounds/milly-and-tilly.jpg', name: 'Milly and Tilly', breed: 'Shih Tzu', age: '8 yrs, 1 m', neutered: 'Yes', vaccinated: 'Yes', chipped: 'Yes', size: 'Medium', sex: 'Female', cols: 1, rows: 4, color: 'lightblue', description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'},
  ];
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {

  }

}
