import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [TagModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {}
