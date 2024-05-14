import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="project.photo" alt="Photo for project{{project.title}}">
      <h2 class="listing-heading">{{ project.title }}</h2>
      <p class="listing-location">{{ project.company}}, {{project.summary}}</p>
      <a [routerLink]="['/details', project.id]">Learn More</a>
    </section>
  `,
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;
}
