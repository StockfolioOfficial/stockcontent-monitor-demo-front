import { makeObservable, action, observable } from 'mobx';

interface ModalType {
  isOpen: boolean;
  modalTitle:
    | 'SomeoneConfirming'
    | 'WritingDeniedReason'
    | 'NothingReason'
    | 'SubmitDeniedReason'
    | 'CancelDeniedReason'
    | 'Approving'
    | null;
}

class ModalStore {
  constructor() {
    makeObservable(this, {
      isOpen: observable,
      modalTitle: observable,
      openModal: action,
      closeModal: action,
    });
  }

  isOpen: ModalType['isOpen'] = false;
  modalTitle: ModalType['modalTitle'] = null;

  // 플럭스 패턴(flux?)
  // 플럭스 패턴에서 update를 받아와서 세팅 할 수 있게끔

  openModal(title: ModalType['modalTitle']) {
    this.isOpen = true;
    this.modalTitle = title;
  }

  closeModal() {
    this.isOpen = false;
    this.modalTitle = null;
  }
}

const modalStore = new ModalStore();

export default modalStore;
// 스토어 시점의 관측자 세팅
