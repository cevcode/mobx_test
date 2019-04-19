import React, { Component } from "react";

import { Column } from "./Column";
import { observer } from "mobx-react/index";

@observer class ColumnList extends React.Component {
  render() {
    console.log('store');
    return (
        <Column data={this.props.store.columns}>test</Column>
    );
  }
}

export default ColumnList;
