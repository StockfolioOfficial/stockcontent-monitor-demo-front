import { makeAutoObservable } from 'mobx';
import { ModalTitleProps } from '../components/molecules/Modal';

interface ModalType extends ModalTitleProps {
  isOpen: boolean;
}

class ModalStore {
  constructor() {
    makeAutoObservable(this);
  }

  isOpen: ModalType['isOpen'] = false;
  modalTitle: ModalType['modalTitle'] = null;
  deniedReason: string = '';
  deniedCategories: number[] = [];

  setReason(arr: number[], reason: string) {
    this.deniedCategories = arr;
    this.deniedReason = reason;
  }

  resetReason() {
    this.deniedCategories = [];
    this.deniedReason = '';
  }

  openModal(title: ModalType['modalTitle']) {
    this.isOpen = true;
    this.modalTitle = title;
  }

  closeModal() {
    this.isOpen = false;
    this.modalTitle = null;
  }
}

export default ModalStore;
// 스토어 시점의 관측자 세팅
