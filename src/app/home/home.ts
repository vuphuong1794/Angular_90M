import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello from Home Component!');
}
