import { computed, observable } from 'mobx';


class Column {
    @observable text;
    @observable id;

    constructor(column) {
        this.id = column.id;
        this.text = column.text;
    }
}

class ColumnHeader {
    @observable header;

    constructor(header) {
        console.log(header);
        this.header = header.type;
    }
}

export class ColumnStore {
    @observable columns = [];
    @observable columnsHeader = "";
    @computed get getFilteredColumns() {
        return this.columns.filter(column => column);
    }
    @computed get getColumnHeader() {
        return this.columnsHeader;
    }

    addColumns(data) {
        data.data.map(column => this.columns.push(new Column(column)));
    }
    addColumnsHeader(data) {
        this.columnsHeader = (new ColumnHeader(data.header));
    }
}

const store = window.store = new ColumnStore;

export default store;