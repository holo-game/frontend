import { makeAutoObservable, observable, action } from "mobx";

class UserStore {
  data = null;

  update(obj) {
    this.data = this.data ? { ...this.data, ...obj } : { ...obj };
  }

  constructor() {
    makeAutoObservable(this, {
      data: observable,
      update: action,
    });
  }
}

export default UserStore;
