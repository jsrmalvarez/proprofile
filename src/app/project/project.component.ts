import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet],
  template: `
    <section class="listing">
    <div class="clickable" (click)="goToDetails(project.id)">
      <img class="listing-photo" [src]="project.photo" alt="Photo for project{{project.title}}">
      <h2 class="listing-heading">{{ project.title }}</h2>
      <h3 class="listing-location">{{ project.company}}</h3>
      <p class="listing-location">{{project.summary}}</p>
      <a class="learn-more"[routerLink]="['/details', project.id]">Learn More</a>
    </div>
    </section>
  `,
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;

  constructor(private router: Router) {}

  goToDetails(projectId: number) {
    this.router.navigate(['/details', projectId]);
  }
}
