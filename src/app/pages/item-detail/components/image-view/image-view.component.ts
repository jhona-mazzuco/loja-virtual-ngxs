import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
 @Input() images!: string[];
 selectedImage!: string;

 ngOnInit() {
  this.selectedImage = this.images[0];
 }
}
