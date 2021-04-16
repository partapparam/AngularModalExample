import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // maintain a list of active modals on the page and exposes the methods for interacting with them
  private modals: any[] = [];
  constructor() { }

  add(modal: any) {
    // add modal to active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    //remove modal from active modals
    this.modals = this.modals.filter(x => x.id !== x);
  }

  open(id: string) {
  //  open by id
    const modal = this.modals.find(x => x.id === id);
    modal.open();
  }

  close(id: string) {
  //  close by id
    const modal = this.modals.find(x => x.id === id);
    modal.close();
  }
}
