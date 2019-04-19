import { observable } from "mobx";

export default class ColumnModel {
  @observable data;
  @observable finished = false;

  constructor(data) {
      this.data = data;
  }
}
