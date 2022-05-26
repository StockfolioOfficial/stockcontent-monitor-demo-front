import { makeAutoObservable } from 'mobx';

class DeniedStore {
  constructor() {
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
