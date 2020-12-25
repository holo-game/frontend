import cryptoRandomString from "crypto-random-string";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const randomString = () => {
  const string = cryptoRandomString({ length: 15 });
  return string;
};

export const requestAlert = ({
  title,
  text,
  icon,
  cancelButtonText,
  confirmButtonText,
  showCancelButton,
  showCloseButton,
}) => {
  return MySwal.fire({
    icon,
    title,
    text,
    cancelButtonText,
    confirmButtonText,
    showCancelButton,
    showCloseButton,
  });
};
