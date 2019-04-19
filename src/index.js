import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react/index";
import DevTools from "mobx-react-devtools";

import ColumnList from "./components/ColumnList";

import './style.css';
import store from './components/ColumnStore';
import config from './data.json';


@observer class App extends React.Component {
    componentDidMount() {
        const { store } = this.props;
        store.addColumns(config);
        store.addColumnsHeader(config);
    }

    render() {
        const { store } = this.props;
        const column = store.getFilteredColumns.map(column => column);
        const header = store.getColumnHeader.header;
        return (
            <ColumnList store={store} />
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
