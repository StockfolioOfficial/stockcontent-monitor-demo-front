import { makeAutoObservable } from 'mobx';
import ModalStore from './ModalStore';
import RootStore from './RootStore';

class DeniedStore {
  modalStore: ModalStore;
  constructor(rootStore: RootStore) {
    this.modalStore = rootStore.modalStore;
    makeAutoObservable(this);
  }

  deniedReason: string = '';
  deniedCategoriesNumber: number[] = [];

  setReason(deniedCategoriesNumber: number[], deniedReason: string) {
    this.deniedCategoriesNumber = deniedCategoriesNumber;
    this.deniedReason = deniedReason;
  }

  resetReason() {
    this.deniedCategoriesNumber = [];
    this.deniedReason = '';
  }
}

export default DeniedStore;
