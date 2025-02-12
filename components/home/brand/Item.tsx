import React from 'react'

const Item = ({name}:{name: string}) => {
  return (
    <div className='text-white font-semibold'>{name}</div>
  )
}

export default Item