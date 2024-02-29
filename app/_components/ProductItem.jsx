import React from 'react'
import Image from 'next/image'
function ProductItem({product}) {
  return (
    <div>
      {product?.attributes?.titel}
      {/* {product?.attributes?.IMG?.data?.attributes?.size} */}

      <Image src={product?.attributes?.IMG?.data?.attributes?.url}
			alt='banner-card'
			width={400}
			height={350}
            className='rounded-t-lg h-[170px] object-cover'
			/>


            {/* <Image src={"http://localhost:1337/"+product?.attributes?.IMG?.data?.attributes?.url}
			alt='banner-card'
			width={400}
			height={350}
			className='rounded-t-lg h-[170px] object-cover'
			/> */}
    </div>
  )
}

export default ProductItem
