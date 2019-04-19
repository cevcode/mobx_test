import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import ColumnList from "./components/ColumnList";
import ColumnListModel from "./models/ColumnListModel";
import './style.css';
import config from './data.json';

const store = new ColumnListModel();


class App extends React.Component {
    componentDidMount() {
        this.setState({ data: config });
        store.addColumns(config);
    }

    render() {
        const { store } = this.props;
        return (
            <div><ColumnList store={store} /></div>
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


// playing around in the console
window.store = store;
