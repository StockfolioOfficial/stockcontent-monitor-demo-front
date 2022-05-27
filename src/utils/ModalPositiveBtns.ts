import UseStore from '../stores/UseStores';
import axios from 'axios';

const Approving = () => {
  const { ModalStore } = UseStore();

  ModalStore.closeModal();
};

const CancelDeniendReason = () => {
  const { ModalStore } = UseStore();

  ModalStore.closeModal();

  return '/';
};

const NothingReason = () => {
  const { ModalStore } = UseStore();

  ModalStore.closeModal();
};

const SomeoneConfirming = () => {
  const { ModalStore } = UseStore();

  ModalStore.closeModal();

  return '/';
};

const SubmitDeniedReason = async () => {
  const { ModalStore } = UseStore();

  // await axios
  //   .post('http://localhost:8000/test/reason', {
  //     deniedReason: ModalStore.deniedReason,
  //     deniedCategories: ModalStore.deniedCategories,
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));

  ModalStore.closeModal();
  ModalStore.resetReason();

  return '/';
};

const WritingDeniedReason = () => {
  const { ModalStore } = UseStore();

  ModalStore.closeModal();

  return 'report';
};

const positiveBtns = {
  Approving,
  CancelDeniendReason,
  NothingReason,
  SomeoneConfirming,
  SubmitDeniedReason,
  WritingDeniedReason,
};

export default positiveBtns;
