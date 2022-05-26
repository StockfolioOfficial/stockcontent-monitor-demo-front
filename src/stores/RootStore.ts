import DeniedStore from './DeniedStore';
import ModalStore from './ModalStore';

export default class RootStore {
  modalStore: ModalStore;
  deniedStore: DeniedStore;

  constructor() {
    this.modalStore = new ModalStore();
    this.deniedStore = new DeniedStore();
  }
}
