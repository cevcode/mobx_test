import React, { Component } from "react";

import { Column } from "./Column";
import { observer } from "mobx-react/index";

@observer class ColumnList extends React.Component {
  render() {
    return (
        <Column data={this.props.store.columns}>test</Column>
    );
  }
}

export default ColumnList;
