'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { client, urlFor } from '@/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '@/components'

export const getData = async ({params}) => {
    const {slug} = params;
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return ({product,products})
  }


const ProductDetails = async ({params}) => {
    const [index , setIndex] = useState(0)
    const data = await getData({params});
    const {image, name, details, price} = data.product;
   
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[index])} alt={name} className='product-detail-image'
                    
                    />
                </div>
                <div className="small-images-container">
                        {image?.map((item, i) =>(
                            <img
                                src={urlFor(item)} alt={item} 
                                className={i === index ? "small-image selected-image" : "small-image"}
                                onMouseEnter={()=>setIndex(i)}
                            />
                        ))}
                        {console.log(index)}
                    </div>
                
            </div>
            <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar/>
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className='price'>${price}</p>
                    <div className='quantity'>
                        <h3>Quantity: </h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick=""><AiOutlineMinus/></span>
                            <span className='num' onClick="">0</span>
                            <span className='plus' onClick=""><AiOutlinePlus/></span>
                        </p>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart' onClick="">Add to Cart</button>
                        <button type='button' className='buy-now' onClick="">Buy Now</button>
                    </div>
                </div>
        </div>
        <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {data.products.map((item, i) => (
                            <Product product={item} key={item._id}/>
                        ))}
                    </div>
                </div>
        </div>
    </div>
  )
}


export default ProductDetails