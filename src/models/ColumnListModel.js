import { observable, action } from "mobx";

import ColumnModel from "./ColumnModel";

export default class ColumnListModel {
  @observable columns = [];

  @action
  addColumns(data) {
    this.columns.push(new ColumnModel(data));
  }
}
