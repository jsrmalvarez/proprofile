import { Component, Input } from '@angular/core';
import { Tool } from '../tool';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tool',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="tool.icon" alt="Icon for tool{{tool.name}}">
      <h2 class="listing-heading">{{ tool.name }}</h2>
      <p class="listing-location">{{ tool.description }}</p>
    </section>
  `,
  styleUrl: './tool.component.css'
})
export class ToolComponent {
  @Input() tool!: Tool;
}
