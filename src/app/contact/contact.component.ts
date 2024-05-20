import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
    <div class="container">
        <div class="typed-out-container">
            <div class="typed-out">Let's talk about your project!</div>
        </div>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="name">Name</label>
            <input id="name" type="text" formControlName="name">

            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email">

            <button type="submit" class="primary">Send</button>
        </form>
    </div>
    `,

    styleUrl: './contact.component.css'
})
export class ContactComponent {

    private contactService:ContactService = inject(ContactService);

    applyForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl('')
    });

    public submitApplication() {
        this.contactService.submitApplication(
            this.applyForm.value.name ?? '',
            this.applyForm.value.email ?? '',
        );
    }
}
