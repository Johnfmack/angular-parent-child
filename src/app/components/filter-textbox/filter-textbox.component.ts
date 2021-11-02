import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {
 
 private _filter: string = '';
 @Input() get filter() {
   return this._filter;
 }

set filter(val: string) {
  this._filter = val;
  this.changed.emit(this.filter);
}

@Output() changed: EventEmitter<string> = new EventEmitter<string>();

@Output() sendMessage = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

// send(){
//   console.log('a message')
//   this.sendMessage.emit(`welcome ${this.name}!`)
// }

}
