import { toast } from "react-toastify";

export const showToast = (mesage: string) => {
  toast.warning(mesage, {
    position: "bottom-right",
    className: "toastify",
  });
}