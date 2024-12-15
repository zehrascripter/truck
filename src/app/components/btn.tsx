import React from 'react'
interface Props {
    name : string
}
const Btn = ({ name }: Props) => {
  return (
    <button>{name}</button>
  )
}

export default Btn