import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { ToolComponent } from '../tool/tool.component';
import { ProjectService } from '../project.service';
import { ToolboxService } from '../toolbox.service';

import { Project } from '../project';
import { Tool } from '../tool';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProjectComponent,
    ContactComponent,
    ToolComponent],
  template: `
  <article>
    <section>
      <!--<form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button"
          (click)="filterResults(filter.value)"
           >Search</button>
      </form>-->
    </section>

    <h2>My portfolio</h2>
    <section class="results">
      <app-project
        *ngFor="let project of filteredProjectList"
        [project]="project">
      </app-project>
    </section>

    <app-contact />

    <h2>My toolbox</h2>
    <section class="results">
      <app-tool
        *ngFor="let tool of toolbox"
        [tool]="tool">
      </app-tool>
    </section>

    </article>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  projectList: Project[] = [];
  toolbox: Tool[] = [];

  filteredProjectList: Project[] = [];
  projectService: ProjectService = inject(ProjectService);
  toolboxService: ToolboxService = inject(ToolboxService);

  constructor(){
    this.projectService.getAllProjects()
    .then(
      (projectList : Project[]) => {
        this.projectList = projectList;
        this.filteredProjectList = projectList;
    });

    this.toolboxService.getToolbox()
    .then(
      (toolbox : Tool[]) => {
        this.toolbox = toolbox;
    });
  }

  filterResults(text: string) : void {
      if(!text){
      this.filteredProjectList = this.projectList;
      return;
    }

    this.filteredProjectList = this.projectList.filter(
      project => project?.title.toLowerCase().includes(text.toLowerCase())
    );
  }

}
