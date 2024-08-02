import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'iranTalnet';
  list: string[] = [];
  expanded: boolean = false;
  show(): void {
    this.expanded = !this.expanded;
    if (!this.expanded) {
      // this.resetForm();
    }
  }
}
