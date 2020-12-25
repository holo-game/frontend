import cryptoRandomString from "crypto-random-string";

export const randomString = () => {
  const string = cryptoRandomString({ length: 15 });
  return string;
};
