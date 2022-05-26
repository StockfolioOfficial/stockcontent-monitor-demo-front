import ModalStore from './ModalStore';

export default class RootStore {
  modalStore: ModalStore;

  constructor() {
    this.modalStore = new ModalStore();
  }
}
