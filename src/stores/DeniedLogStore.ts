import { makeAutoObservable } from 'mobx';
import { DeniedLogSectionProps } from '../components/organisms/DeniedLogSection';
import RootStore from './RootStore';

class DeniedLogStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
  }
  deniedLog: DeniedLogSectionProps['deniedLogs'] = [];

  setDeniedLog(denyLog: DeniedLogSectionProps['deniedLogs']) {
    this.deniedLog = denyLog;
  }

  resetState() {
    this.deniedLog = [];
  }
}

export default DeniedLogStore;
