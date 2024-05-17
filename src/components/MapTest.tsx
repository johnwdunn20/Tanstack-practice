import React from 'react'

const MapTest = () => {
  const data = [
    {
      eventType: 'query',
      queryKey: 'queryKey',
      queryHash: 'queryHash',
      queryData: 'queryData',
    },
    {
      eventType: 'query',
      queryKey: 'queryKey',
      queryHash: 'queryHash',
      queryData: 'queryData',
    }
  ]

  const queryHashes = data.map((item) => item.queryHash)
  console.log(queryHashes);

  return (
    <div>MapTest</div>
  )
}

export default MapTest