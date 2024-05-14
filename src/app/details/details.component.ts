import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="project?.photo"
      alt="Photo for project {{project?.title}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{project?.title}}</h2>
      <p class="listing-location">{{project?.company}}, {{project?.summary}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">Project details</h2>
      <p>{{project?.detail}}</p>
      <h2 class="section-heading">Tasks</h2>
      <ul>
        <li *ngFor="let task of project?.tasks">{{task}}</li>
      </ul>
      <h2 class="section-heading">Toolbox</h2>
      <ul>
        <li *ngFor="let tool of project?.toolbox">{{tool}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
`,

  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private projectService: ProjectService = inject(ProjectService);
  project: Project | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  public constructor() {
    const projectId = Number(this.route.snapshot.params['id'])

    this.projectService.getProjectById(projectId)
    .then((project) => {
      this.project = project;
    });

  }

  public submitApplication() {
    this.projectService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }


}
