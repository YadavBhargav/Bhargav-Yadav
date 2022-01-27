import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColunm = { ...this.props.sortColunm };
    if (sortColunm.path === path)
      sortColunm.order = sortColunm.order === "asc" ? "desc" : "asc";
    else {
      sortColunm.path = path;
      sortColunm.order = "asc";
    }
    this.props.onSort(sortColunm);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

