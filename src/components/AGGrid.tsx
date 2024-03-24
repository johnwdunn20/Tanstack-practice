import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import React, { useState, useMemo } from "react";

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

// Create new GridExample component
const AGGrid = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "make", filter: "agTextColumnFilter"},
    { field: "model", filter: "agTextColumnFilter"},
    { field: "price", filter: "agNumberColumnFilter"},
    { field: "electric", filter: "agBooleanColumnFilter"},
  ]);

  // Container: Defines the grid's theme & dimensions.
  return (
    <div
      className={"ag-theme-quartz"}
      style={containerStyle}
    >
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};
export default AGGrid;
