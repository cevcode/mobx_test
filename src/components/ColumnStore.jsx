import { computed, observable } from 'mobx';


class Column {
    @observable caption;
    @observable visible;
    @observable type;

    constructor(column) {
        const { caption, visible, type } = column;
        this.caption = caption;
        this.visible = visible;
        this.type = type;
        this.id = Math.random();
    }
}

class ColumnHeader {
    @observable header;

    constructor(header) {
        this.header = header;
    }
}

class Table {
    @observable Id;
    @observable FName;
    @observable LName;
    @observable BDate;

    constructor(table) {
        const { Id, FName, LName, BDate } = table;
        this.Id = Id;
        this.FName = FName;
        this.LName = LName;
        this.BDate = BDate;
    }
}

export class ColumnStore {
    @observable columns = [];
    @observable columnsHeader = "";
    @observable table = [];

    @computed get getFilteredColumns() {
        return this.columns.filter(column => column);
    }

    @computed get getFilteredTable() {
        return this.table.map(table => table);
    }

    @computed get getColumnHeader() {
        return this.columnsHeader;
    }

    // Function for adding columns to store
    addColumns(data) {
        const columns = data.Columns;
        for(let key in columns) {
            if(columns[key].visible) {
                this.columns.push(new Column(columns[key]));
            }
        }
    }

    addTable(data) {
        data.map(table => this.table.push(new Table(table)))
    }

    // Function for adding header to store
    addColumnsHeader(data) {
        this.columnsHeader = (new ColumnHeader(data.Title));
    }
}

const store = window.store = new ColumnStore;

export default store;