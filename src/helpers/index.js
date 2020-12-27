import { makeVar } from "@apollo/client";
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

export const parseCookie = (name, str) => {
  var nameEQ = name + "=";
  var ca = str && str.split(";");
  if (!ca) return null;
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const isLoggedInVar = makeVar(false);
