import { makeAutoObservable } from 'mobx';
import { ModalTitleProps } from '../components/molecules/Modal';
import RootStore from './RootStore';
import DeniedStore from './DeniedStore';

interface ModalType extends ModalTitleProps {
  isOpen: boolean;
}

class ModalStore {
  deniedStore: DeniedStore;
  constructor(rootStore: RootStore) {
    this.deniedStore = rootStore.deniedStore;
    makeAutoObservable(this);
  }

  isOpen: ModalType['isOpen'] = false;
  modalTitle: ModalType['modalTitle'] = null;
  deniedReason: string = '';
  deniedCategories: number[] = [];
  contentId: string | undefined;

  setReason(arr: number[], reason: string) {
    this.deniedCategories = arr;
    this.deniedReason = reason;
  }

  resetReason() {
    this.deniedCategories = [];
    this.deniedReason = '';
  }

  openModal(title: ModalType['modalTitle'], uuid: string) {
    this.isOpen = true;
    this.modalTitle = title;
    this.contentId = uuid;
  }

  closeModal() {
    this.isOpen = false;
    this.modalTitle = null;
  }
}

export default ModalStore;
