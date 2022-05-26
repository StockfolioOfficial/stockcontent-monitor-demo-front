import { makeAutoObservable } from 'mobx';
import DeniedStore from './DeniedStore';
import ModalStore from './ModalStore';

export default class RootStore {
  modalStore: ModalStore;
  deniedStore: DeniedStore;

  constructor() {
    makeAutoObservable(this);
    this.modalStore = new ModalStore(this);
    this.deniedStore = new DeniedStore(this);
  }
}
