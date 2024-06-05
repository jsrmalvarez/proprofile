import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { Tool } from './tool';

@Injectable({
    providedIn: 'root'
})
export class ToolboxService {
    private projectService: ProjectService = inject(ProjectService);

    public constructor() { }

    public async getToolbox(): Promise<Tool[]> {
        const projects = await this.projectService.getAllProjects();
        const toolnames = [... new Set(Array.from(projects.map(project => project.tools).flat()).sort((a:string, b:string) => a.toLowerCase().localeCompare(b.toLowerCase())))];
        const toolbox = toolnames.map(toolname => ({ name: toolname, description: null, icon: null }));
        return toolbox;
    }
}