import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://localhost:3000/projects';

  public constructor() { }


  public async getAllProjects(): Promise<Project[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  public async getProjectById(id: number): Promise<Project | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`New project application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
