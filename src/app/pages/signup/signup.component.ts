import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/blogblog-button/button.component';
import { LoadingService } from '../../shared/services/loading.service';
import { UserService } from '../../shared/services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgClass, NgIf } from '@angular/common';
import { passwordMatchValidator, passwordValidator } from '../../shared/validators';
import { Button, ButtonDirective } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ButtonComponent,
    ToastModule,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    Button,
    ButtonDirective,
    RouterLink,
  ],
  providers: [MessageService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  registerForm!: FormGroup;

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
    private messageService: MessageService,
  ) {
    this.buildFormGroup();
  }

  private buildFormGroup() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, passwordValidator]),
        confirmPassword: new FormControl('', Validators.required),
        firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      },
      { validators: passwordMatchValidator },
    );
  }

  handleRegister() {
    this.loadingService.loading$.next(true);
    let registerInfo = this.registerForm.value;
    delete registerInfo.confirmPassword;
    this.userService.register(registerInfo).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Successfully registered',
        });
        this.loadingService.loading$.next(false);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Success',
          detail: 'Successfully registered',
        });
      },
    });
  }
}
