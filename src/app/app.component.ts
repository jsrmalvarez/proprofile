import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
  <main>
    <a [routerLink]="['/']">
    <header class="brand-name">
      <div class="typed-out-container">
        <div class="typed-out">ninjatic.engineer</div>
      </div>
    </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
  <div style="width: 100%; height: 5em;"></div>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ninjatic.engineer';
}
