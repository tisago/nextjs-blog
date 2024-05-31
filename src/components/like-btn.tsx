"use client"

import { useState } from "react"

export default function LikeBtn() {
  
  const [count, setCount] =useState(0)

  function countHandler() {
    setCount(count+1)
  }
  
  return (
    <button onClick={countHandler} className="bg-blue-500 text-white p-2 mt-10">
      {`Like ${count}`}
    </button>
  )
}