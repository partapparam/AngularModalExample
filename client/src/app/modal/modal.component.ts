import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element;

  constructor(
    private ms: ModalService,
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }

  ngOnInit(): void {
  //  check to make sure an ID exists on the modal
    if (!this.id) {
      console.log('no Id');
      return;
    }
  //  add element to bottom of page (above the /body tag) so it shows on top of everything else.
    document.body.appendChild(this.element);
  //  Click to close
    this.element.addEventListener('click', e => {
      if (e.target.className === 'modal') {
        this.close();
      }
    });

  //  Add this instance to the active modals array
    this.ms.add(this);
  }

  ngOnDestroy(): void {
    //remove from the active array list
    this.ms.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }


}
