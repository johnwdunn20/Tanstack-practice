import React from 'react'
import { useReactTable } from '@tanstack/react-table'

const TanStackTable = () => {
  const table = useReactTable({
    columns: [
      columnHelper.accessor()
      {
        Header: 'Column 2',
        accessorKey: 'col2',
      }
    ],
    data: [
      {
        col1: 'Hello',
        col2: 'World'
      },
      {
        col1: 'React-Table',
        col2: 'rocks'
      }
    ]
  })
  return (
    <div>TanStackTable</div>
  )
}

export default TanStackTable