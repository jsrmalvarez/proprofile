import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private url = 'https://localhost:45410';

  public constructor(private http:HttpClient) { }

  public submitApplication(name: string, email: string) {
    this.http.post(`${this.url}`, { name, email }).subscribe();
  }
}
