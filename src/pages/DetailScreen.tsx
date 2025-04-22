import React from 'react'
import useStoryDetail from '../hooks/useStoryDetail'

function DetailScreen() {
    const {data, loading} = useStoryDetail()
    console.log(data);
  return (
    <div>DetailScreen</div>
  )
}

export default DetailScreen