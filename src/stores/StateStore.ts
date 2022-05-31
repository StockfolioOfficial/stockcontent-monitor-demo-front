import { makeAutoObservable } from 'mobx';
import { DetailDataProps } from '../components/types/CommonDataProps';
import RootStore from './RootStore';

class StateStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
  }

  state: DetailDataProps['stateLabel'] = 'CHECK';

  setState(stateLabel: DetailDataProps['stateLabel']) {
    this.state = stateLabel;
  }

  resetState() {
    this.state = 'CHECK';
  }
}

export default StateStore;
