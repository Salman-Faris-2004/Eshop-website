import React from 'react'
import Heading from '../Shared/Heading/Heading'

import p1 from '../../assets/product/p-1.jpg'
import p2 from '../../assets/product/p-2.jpg'
import p3 from '../../assets/product/p-3.jpg'
import p4 from '../../assets/product/p-4.jpg'
import p5 from '../../assets/product/p-5.jpg'
import p6 from '../../assets/product/p-7.jpg'
import p7 from '../../assets/product/p-9.jpg'
import ProductCard from './ProductCard'


const ProdutsData = [
    {id:'1',image:p1,title:'Boat HeadPhone',Price:'120',aosDeley:'0'},
    {id:'2',image:p2,title:'Rocky Mountain',Price:'420',aosDeley:'200'},
    {id:'3',image:p3,title:'Goggles',Price:'320',aosDeley:'100'},
    {id:'4',image:p4,title:'Printed',Price:'220',aosDeley:'600'},
   
]

const ProdutsData2 = [
    {id:'1',image:p5,title:'Boat HeadPhone',Price:'120',aosDeley:'0'},
    {id:'2',image:p6,title:'Rocky Mountain',Price:'420',aosDeley:'200'},
    {id:'3',image:p7,title:'Goggles',Price:'320',aosDeley:'100'},
    {id:'3',image:p7,title:'Goggles',Price:'320',aosDeley:'100'},
]

const Product = (data) => {
  return (
    <div>
       <div className='container'>
          {/* Heading Section */}
       
          <Heading title='Our Products' subtitle='Explore Your Products'/>

       
       {/* Body Section */}
       <ProductCard data={ProdutsData} />
       <ProductCard data={ProdutsData2} />

       </div>
    </div>
  )
}

export default Product