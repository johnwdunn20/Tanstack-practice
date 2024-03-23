import React, { useMemo, useState } from 'react'
import { ColumnDef, useReactTable } from '@tanstack/react-table'

//TData
type User = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: string
}

const TanStackTable = () => {
  const [data, setData] = useState<User[]>([
      {
        "firstName": "Tanner",
        "lastName": "Linsley",
        "age": 33,
        "visits": 100,
        "progress": 50,
        "status": "Married"
      },
      {
        "firstName": "Kevin",
        "lastName": "Vandy",
        "age": 27,
        "visits": 200,
        "progress": 100,
        "status": "Single"
      }
  ])

  const columns: ColumnDef<User>[] = []
  const table = useReactTable({
    columns,
    data
  })
  
  return (
    <div>TanStackTable</div>
  )
}

export default TanStackTable