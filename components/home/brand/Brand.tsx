import Item from './Item'
import React from 'react'

const Brand = () => {
    const data = [
        {
            id: 1,
            name: 'Brands'
        },
        {
            id: 2,
            name: 'New'
        },
        {
            id: 3,
            name: 'Men'
        },
        {
            id: 4,
            name: 'Women'
        },
        {
            id: 5,
            name: 'Phones'
        },
        {
            id: 6,
            name: 'Laptops'
        },
        {
            id: 7,
            name: 'More Categories'
        },
    ]
  return (
    <section className='flex gap-5 justify-center items-center py-3 bg-[#232f3e]'>
        {data.map((item)=>(
            <Item key={item.id} name={item.name} />
        ))}
    </section>
  )
}

export default Brand