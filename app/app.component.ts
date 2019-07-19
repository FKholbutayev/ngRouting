import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="/img/logo.svg">
      </header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="['/mail', { outlets: { primary:'folder/inbox', pane:null}}]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            [routerLink]="['/mail', { outlets: { primary:'folder/trash', pane:null}}]"
            routerLinkActive="active">
            Trash
          </a>
          <a
            [routerLink]="['/dashboard']"
            routerLinkActive="active">
          
          </a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .subscribe(event => {
        console.log("event", event)
      })
  }
}
