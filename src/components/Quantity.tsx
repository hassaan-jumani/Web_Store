'use client'

import React, {useState} from "react"

const Quantity = () => {
    const [num, setNum] = useState(1)
  return (
    <div className="flex gap-x-3 items-center">
        {/* Minus */}
        <button className="center border h-6 w-6 rounded-full"onClick={() => {
            setNum(num <= 1 ? 1: num - 1)
        }}  >
            -
        </button>
        {/* Number */}
        <span>
            {num}
        </span>
        {/* Plus */}
        <button className="center border h-6 w-6 rounded-full" onClick={() => {
            setNum(num + 1)
        }}  >
            +
        </button>
    </div>
  )
}

export default Quantity

export const OperationButton = () => {
    return <div className="center border h-6 w-6 rounded-full"></div>
}