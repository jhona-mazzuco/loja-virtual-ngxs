import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-image-option',
  templateUrl: './image-option.component.html',
  styleUrls: ['./image-option.component.scss'],
})
export class ImageOptionComponent {
  @Input() url!: string;
  @Output() changeImage = new EventEmitter<string>();
}
