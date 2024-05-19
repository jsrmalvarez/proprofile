import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
    <div class="border">
    <div class="contact">
    <div class="typewriter">
        <h2 class="section-heading">Hire me!</h2>
    </div>
    </div>
    <a class="contactMail" href="mailto:jsrmalvarez@ninjatic.engineer">jsrmalvarez&#64;ninjatic.engineer</a>
    </div>
    `,

    styleUrl: './contact.component.css'
})
export class ContactComponent {
}
