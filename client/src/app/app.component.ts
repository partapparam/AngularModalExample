import { Component } from '@angular/core';
import {ModalService} from "./modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(
    private ms: ModalService
  ) {}

  openModal(id: string) {
    this.ms.open(id);
  }

  closeModal(id: string) {
    this.ms.close(id);
  }
}
