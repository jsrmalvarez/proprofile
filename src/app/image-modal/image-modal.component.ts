// image-modal.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css'],
  standalone: true,
  imports: [CommonModule]  // Import CommonModule here
})

export class ImageModalComponent {
  @Input() imageUrl: string | undefined = "";
  @Input() imageCaption: string | undefined = "";
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
