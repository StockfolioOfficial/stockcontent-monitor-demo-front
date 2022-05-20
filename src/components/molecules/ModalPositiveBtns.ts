import UseStore from '../../stores/UseStores';

const CloseModalFunc = () => {
  const { ModalStore } = UseStore();
  ModalStore.closeModal();
};

const Approving = () => {
  CloseModalFunc();
};

const CancelDeniendReason = () => {
  CloseModalFunc();
  return '/test2';
};

const NothingReason = () => {
  CloseModalFunc();
};

const SomeoneConfirming = () => {
  CloseModalFunc();
  return '/test2';
};

const SubmitDeniedReason = () => {
  CloseModalFunc();
  return '/test2';
};

const WritingDeniedReason = () => {
  CloseModalFunc();
  return '/test2';
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
