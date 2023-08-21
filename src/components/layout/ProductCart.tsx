import Image ,{StaticImageData} from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import {client} from '@/../sanity/lib/client'

const builder = imageUrlBuilder(client)

function urlFor(source:string) {
  return builder.image(source)
}


function ProductCart(props: {'title':string, 'price':number, 'img':string, 'category':string, 'id':number}) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className='py-6 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300'>
      <div>
        {/* <Image src={props.img} alt='first crousel' /> */}
        <img src={urlFor(props.img).width(400).url()} />
        <h3 className='font-bold text-lg mt-3'> {props.title}</h3>
        <p className='text-lg'>${props.price}</p>
        <p className='text-lg font-bold'>Category: <span className='text-base font-normal capitalize'>{props.category}</span></p>
      </div>
      <div className='py-1'>
        <Button>Add to cart</Button>
        </div>
    </div>
    </Link>
  )
}

export default ProductCart