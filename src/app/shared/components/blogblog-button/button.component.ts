import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SEVERITY } from './blogblog-button.type';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet, NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  severity: SEVERITY = 'primary';
  @Input()
  disabled: boolean = false;
  @Output()
  onClick: EventEmitter<any> = new EventEmitter();
  @Input()
  iconBtn: boolean = false;
  @Input({ required: true })
  title: string = '';
  @Input()
  fullWidth: boolean = false;

  handleClick(event: any) {
    this.onClick.emit(this.title);
  }
}
