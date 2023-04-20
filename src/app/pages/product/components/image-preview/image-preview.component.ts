import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnChanges {

  @Input() images!: string[];

  preview!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.images?.length) {
      this.preview = this.images[0];
    }
  }
}
