import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

function useStore() {
  return useContext(MobXProviderContext);
}

export default useStore;
