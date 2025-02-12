import ProductCard from '@/components/shared/product/ProductCard'
import React from 'react'

const data = [
    {
        id: 1,
        image: '/iphone/recommanded/1.jpg',
        title: 'iPhone 14 Pro Max',
        price: 1199
    },
    {
        id: 2,
        image: '/iphone/recommanded/2.jpg',
        title: 'iPhone 14 Pro Max',
        price: 1080
    },
    {
        id: 3,
        image: '/iphone/recommanded/3.jpg',
        title: 'iPhone 14 Pro Max',
        price: 1000
    },
    {
        id: 4,
        image: '/iphone/recommanded/4.jpg',
        title: 'iPhone 14 Pro Max',
        price: 1200
    },
    {
        id: 5,
        image: '/iphone/recommanded/1.jpg',
        title: 'iPhone 14 Pro Max',
        price: 800
    },
    {
        id: 6,
        image: '/iphone/recommanded/1.jpg',
        title: 'iPhone 14 Pro Max',
        price: 1300
    },
]
const Recommanded = () => {
  return (
    <section className='w-[1280px] mx-auto mt-10'>
        <p className='text-lg font-semibold'>Recommanded For You</p>
        <div className='w-full flex justify-between items-center gap-2 mt-1'>
            {
                data.map((item)=>(
                    <ProductCard key={item.id} product={item}/>
                ))
            }
        </div>
    </section>
  )
}

export default Recommanded