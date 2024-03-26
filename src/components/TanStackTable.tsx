import React, { useMemo, useState } from 'react'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'

//TData
type User = {
  firstName: string
  lastName: string
  // age: number
  // visits: number
  // progress: number
  // status: string
}

const TanStackTable = () => {
  const [data, setData] = useState<User[]>([
      {
        "firstName": "Tanner",
        "lastName": "Linsley",
        // "age": 33,
        // "visits": 100,
        // "progress": 50,
        // "status": "Married"
      },
      {
        "firstName": "Kevin",
        "lastName": "Vandy",
        // "age": 27,
        // "visits": 200,
        // "progress": 100,
        // "status": "Single"
      }
  ])

  // useMemo is a React hook that memorizes the output of a function and reuses it when the inputs change.
  // This prevents unnecessary recalculations of the column array on every render
  const columns = useMemo(() => [
    {
      accessorKey: 'firstName', // accessorKey: 'firstName' is the same as accessorFn: (row: User) => row.firstName??
      id: 'firstName',
      header: 'First Name',
    },
    {
      accessorKey: 'lastName',
      id: 'lastName',
      header: 'Last Name',
    },
  ], []);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>TanStackTable</div>
  )
}

export default TanStackTable