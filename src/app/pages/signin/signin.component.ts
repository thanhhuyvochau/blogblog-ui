import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoadingService } from '../../shared/services/loading.service';
import { UserService } from '../../shared/services/user.service';
import { MessageService } from 'primeng/api';
import { passwordMatchValidator, passwordValidator } from '../../shared/validators';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from '../../shared/components/blogblog-button/button.component';
import { ToastModule } from 'primeng/toast';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ButtonComponent, ToastModule, NgIf, RouterLink],
  providers: [MessageService],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  signInForm!: FormGroup;

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
    private messageService: MessageService,
  ) {
    this.buildFormGroup();
  }

  private buildFormGroup() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator]),
    });
  }

  handleSignIn() {
    // this.loadingService.loading$.next(true);
    // let registerInfo = this.signInForm.value;
    // delete registerInfo.confirmPassword;
    // this.userService.signup(registerInfo).subscribe({
    //   next: (data) => {
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: 'Successfully registered',
    //     });
    //     this.loadingService.loading$.next(false);
    //   },
    //   error: (error) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Success',
    //       detail: 'Successfully registered',
    //     });
    //   },
    // });
  }
}
