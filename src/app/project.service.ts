import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Project } from './project';
import jsonData from './db.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://localhost:3000/projects';

  public constructor() { }

  private data = jsonData;


  public async getAllProjects(): Promise<Project[]> {
    return Promise.resolve(this.data.projects);
  }

  public async getProjectById(id: number): Promise<Project | undefined> {
    const project = this.data.projects.find(p => p.id === id);
    return Promise.resolve(project);
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`New project application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
