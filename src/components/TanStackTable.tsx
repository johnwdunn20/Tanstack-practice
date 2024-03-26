import React, { useMemo, useState } from 'react'
import { useReactTable } from '@tanstack/react-table'

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

  const columns = [
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
  ];
  const table = useReactTable({
    data,
    columns,
  })

  return (
    <div>TanStackTable</div>
  )
}

export default TanStackTable