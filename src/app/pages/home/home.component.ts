import { Component } from '@angular/core';
import { BlogCardComponent } from '../../shared/components/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
