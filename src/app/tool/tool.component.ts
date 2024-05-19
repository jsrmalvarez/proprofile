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
      <h2 class="listing-heading">{{ tool.name }}</h2>
    </section>
  `,
  styleUrl: './tool.component.css'
})
export class ToolComponent {
  @Input() tool!: Tool;
}
