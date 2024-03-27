import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";

//TData
type User = {
  firstName: string;
  lastName: string;
  // age: number
  // visits: number
  // progress: number
  // status: string
};

const TanStackTable = () => {
  const [data, setData] = useState<User[]>([
    {
      firstName: "Tanner",
      lastName: "Linsley",
      // "age": 33,
      // "visits": 100,
      // "progress": 50,
      // "status": "Married"
    },
    {
      firstName: "Kevin",
      lastName: "Vandy",
      // "age": 27,
      // "visits": 200,
      // "progress": 100,
      // "status": "Single"
    },
  ]);

  // useMemo is a React hook that memorizes the output of a function and reuses it when the inputs change.
  // This prevents unnecessary recalculations of the column array on every render
  const columns: ColumnDef<User>[] = useMemo(
    () => [
      {
        accessorKey: "firstName", // accessorKey: 'firstName' is the same as accessorFn: (row: User) => row.firstName??
        id: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        id: "lastName",
        header: "Last Name",
      },
    ],
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log('table: ', table);

  console.log('table.getHeaderGroups(): ', table.getHeaderGroups());
  console.log('table.getHeaderGroups()[0].headers: ', table.getHeaderGroups()[0].headers);


  return (
    <div>
      {/* <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{cell.getValue()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default TanStackTable;
