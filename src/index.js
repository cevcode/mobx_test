import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react/index";
import DevTools from "mobx-react-devtools";
import { Column } from "./components/Column";

import './style.css';
import store from './components/ColumnStore';
import config from './data.json';
import table from './table.json';


@observer class App extends React.Component {
    componentDidMount() {
        const { store } = this.props;

        // Get data from json -> insert to mobx store
        store.addColumns(config);
        store.addColumnsHeader(config);
        store.addTable(table);
    }

    render() {
        const { store } = this.props;

        // Get data from store
        const header = store.getColumnHeader.header;
        return (
            <Column className="table">
                <h2>{header}</h2>
                <Column direction="row" jc="sb">
                    {store.getFilteredColumns.map(column => <h3 key={column.id}>{column.caption}</h3>)}
                </Column>
                {store.getFilteredTable.map(row =>
                    <Column className="table__item" key={row.Id} direction="row" jc="sb">
                        <Column>{row.Id}</Column>
                        <Column>{row.FName}</Column>
                        <Column>{row.LName}</Column>
                        <Column ai="fe">{row.BDate}</Column>
                    </Column>)
                }
            </Column>
        );
    }
}

export { App };

render(
  <div>
    <DevTools />
    <App store={store} />
  </div>,
  document.getElementById("root")
);


window.store = store;
