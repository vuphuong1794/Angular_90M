import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
       <app-home />
    </main>
    
    <router-outlet/>
    `,
  styles: [
    `
    main {
      padding: 16px;
    }
    `
  ]
})
export class App {
  title = 'my-angular-app';
}
