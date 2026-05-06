import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService, ContactRequest } from '../../../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['Comercial', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal(false);

  projectTypes = ['Comercial', 'Videoclipe', 'Narrativa', 'Outros'];

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(false);

    const request: ContactRequest = this.contactForm.value;

    this.contactService.submitContact(request).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submitSuccess.set(true);
        this.contactForm.reset({ projectType: 'Comercial' });

        // Hide success message after 5 seconds
        setTimeout(() => this.submitSuccess.set(false), 5000);
      },
      error: (err) => {
        console.error('Contact submission failed', err);
        this.isSubmitting.set(false);
        this.submitError.set(true);
      },
    });
  }
}
