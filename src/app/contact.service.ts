import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public constructor() { }


  public submitApplication(name: string, email: string) {
    console.log(`New project application received: firstName: ${name}, email: ${email}.`);
  }
}
