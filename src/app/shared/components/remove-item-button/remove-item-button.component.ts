import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-remove-item-button',
  templateUrl: './remove-item-button.component.html',
  styleUrls: ['./remove-item-button.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class RemoveItemButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
