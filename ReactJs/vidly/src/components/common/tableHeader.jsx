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

  // renderSortIcon = column => {
  //   const { sortColunm } = this.props;

  //   if (column.path !== sortColunm.path) return null;
  //   if (sortColunm.order === "asc") return <i className="fa fa-sort-asc" />;
  //   return <i className="fa fa-sort-desc" />;
  // };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
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

