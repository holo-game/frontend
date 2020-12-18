import UserStore from "./user-store";

export default function initStores() {
  const userStore = new UserStore();
  return {
    userStore,
  };
}
