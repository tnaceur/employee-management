import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationFormComponent } from './creation-form/creation-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterLink, CreationFormComponent],
  template: `
    <main>
      <img class="icon" src="home.png" routerLink="">
      <img class="icon" src="add.png" routerLink="add">
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {

}
