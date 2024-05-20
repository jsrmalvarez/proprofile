import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
  ],
  template: `
  <article>

    <section class="listing-description">
      <h2 class="listing-heading">{{project?.title}}</h2>
      <p class="listing-location">{{project?.company}}, {{project?.summary}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">Project details</h2>
      <p>{{project?.detail}}</p>
      <img class="listing-photo" [src]="project?.photo"
      alt="Photo for project {{project?.title}}"/>
      <h2 class="section-heading">Tasks</h2>
      <ul>
        <li *ngFor="let task of project?.tasks">{{task}}</li>
      </ul>
      <h2 class="section-heading">Toolbox</h2>
      <ul>
        <li *ngFor="let tool of project?.tools">{{tool}}</li>
      </ul>
    </section>
    <app-contact />
  </article>
`,

  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private projectService: ProjectService = inject(ProjectService);
  project: Project | undefined;

  public constructor() {
    const projectId = Number(this.route.snapshot.params['id'])

    this.projectService.getProjectById(projectId)
    .then((project) => {
      this.project = project;
    });

  }
}
