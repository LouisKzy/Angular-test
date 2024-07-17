import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],

  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="assets/logo.png"
          alt="logo"
          aria-hidden="true"
          width="80"
          height="80"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'Wazaaa';
}
