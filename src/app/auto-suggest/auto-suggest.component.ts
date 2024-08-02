import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-auto-suggest',
  templateUrl: './auto-suggest.component.html',
  styleUrls: ['./auto-suggest.component.css']
})
export class AutoSuggestComponent implements OnInit {

  public coins: any[] = [];
  searchTerm = '';
  list: string[] = [];
  checkedAll: boolean = false;
  coinsInput: boolean = false;

  @Output() public childData = new EventEmitter;

  constructor(private _appService: AppService, private renderer: Renderer2) {
    // this.renderer.listen('window', 'click', (e: Event) => {
    //  console.log(e);
    // });
  }


  ngOnInit(): void {
    this._appService.getData().subscribe((data) => {
      this.coins = data.slice(0, 200);
    })
    this.childData.emit(this.list)
  }

  resetForm(): void {
    this.list = [];
    this.checkedAll = false;
    this.searchTerm = '';
  }



  getValue(event: any) {
    this.checkedAll = false;
    if (event.target.checked) {
      this.list.push(event.target.value);
    }
    if (!event.target.checked) {
      if (this.list.length == this.coins.length) {
        this.list = [];
      }
      this.list.map((value, index) => {
        if (value == event.target.value) {
          this.list.splice(index, 1);
        }
      })
    }
    this.childData.emit(this.list)
  }

  getAll(event: any) {
    if (event.target.checked) {
      this.list = this.coins;
    } else {
      this.list = [];
    }
    this.childData.emit(this.list)
  }

  search(value: string) {
    this.list = [];
    this.checkedAll = false;
    this.childData.emit(this.list)
    return this.coins.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
  }
}
