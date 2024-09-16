import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/blogblog-button/button.component';
import { LoadingService } from '../../shared/services/loading.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private loadingService: LoadingService) {}

  handleRegister() {
    this.loadingService.loading$.next(true);
    setTimeout(() => {
      this.loadingService.loading$.next(false);
    }, 3000);
  }
}
