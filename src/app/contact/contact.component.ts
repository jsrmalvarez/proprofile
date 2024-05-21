import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `
    <div class="container">
        <div class="typed-out-container">
            <div class="typed-out">Tell me about your project!</div>
        </div>
        <a class="contactMail" href="mailto:jsrmalvarez@ninjatic.engineer">jsrmalvarez&#64;ninjatic.engineer</a>
    </div>
    `,

    styleUrl: './contact.component.css'
})
export class ContactComponent {

}
