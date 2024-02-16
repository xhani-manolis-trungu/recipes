import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css'],
  standalone: true,
  imports: [CommonModule],
  exportAs: 'app-modal-component',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponentComponent implements OnInit {

  @Input() modalData: any;
  @Input() modalTarget: string | null = null;
  @Output() isModalOpen: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  toggleModal() {
    this.modalTarget = this.modalTarget ? null : 'default-modal';
    this.isModalOpen.emit();
  }
}
