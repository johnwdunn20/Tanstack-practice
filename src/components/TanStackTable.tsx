import React from 'react'
import { useReactTable } from '@tanstack/react-table'

const TanStackTable = () => {
  const table = useReactTable({
    columns: [
      {
        Header: 'Column 1',
        accessor: 'col1' // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2'
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