import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store/iu/uiSlice";

export const useIuStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };
  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  return { isDateModalOpen, openDateModal, closeDateModal };
};
