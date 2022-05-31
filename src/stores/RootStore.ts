import { makeAutoObservable } from 'mobx';
import DeniedStore from './DeniedStore';
import ModalStore from './ModalStore';
import StateStore from './StateStore';

export default class RootStore {
  modalStore: ModalStore;
  deniedStore: DeniedStore;
  stateStore: StateStore;

  constructor() {
    makeAutoObservable(this);
    this.modalStore = new ModalStore(this);
    this.deniedStore = new DeniedStore(this);
    this.stateStore = new StateStore(this);
  }
}
