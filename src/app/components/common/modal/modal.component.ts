import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() headerTitle: string = '';

  @Input() width?: string = '300px';

  @Input() headerSubtitle: string = '';

  @Input() isVisible: boolean = true;

  @Input() translateHeaderTitle: boolean = true;

  @Input() translateHeaderSubtitle: boolean = true;

  @Output() closeModal = new EventEmitter();
}
