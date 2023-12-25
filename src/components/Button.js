import React from 'react'

export default function button({onClickHandler,value,title}) {
  return (
    <button onClick={onClickHandler} value={value} className='btn-icons'>{title}</button>
  )
}
