import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],

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
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'Wazaaa';
}
