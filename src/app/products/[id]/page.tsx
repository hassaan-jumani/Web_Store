import Quantity from "@/components/Quantity"
import { products } from "@/utils/mock"
import Image from "next/image"
import { Product } from '@/utils/type'
import { Button } from "@/components/ui/button"
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/../sanity/lib/client'
import { StaticImageData } from "next/image"

export const getProductDetail = async (id:number) => {
    const res = await client.fetch(`*[_type=='product' && id == "${id}"]`)
    return res
}

// const getProductDetail = (id: number) => {
//     return products.filter((product) => product.id == id)
// }
const builder = imageUrlBuilder(client)

function urlFor(source:string) {
  return builder.image(source)
}

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export default async function Page({ params }: { params: { id: number } }) {
    // const result = getProductDetail(params.id)
    const data:Product[]= await getProductDetail(params.id)
    return (
        <div className="flex mt-16 py-16 flex-wrap px-16 bg-gray-50">
            {
                data.map((product) => (
                    <div key={product.id}>
                        <div className="flex justify-between gap-6 mb-16">
                            {/* Left hand Side */}
                            <div>
                                <img src={urlFor(product.image).width(400).url()} />
                                {/* <Image className="h-90 w-70" src={product.image} alt={product.name} /> */}
                            </div>

                            {/* Right Hand Side */}
                            <div className="px-10 py-10">
                                <div>
                                    <h1 className="text-4xl">{product.name}</h1>
                                    <h2 className="text-xl text-gray-400 font-semibold">{product.tagline}</h2>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mt-4">SELECT SIZE</h3>
                                </div>
                                <div className="flex gap-x-3">
                                    {/* Select Sizes */}
                                    {sizes.map((size) => {
                                        return (
                                            <div>
                                                <Button className="w-12 h-12 border duration-300 mt-2 hover:shadow-xl flex justify-center items-center rounded-full text-gray-500 bg-white ">{size}</Button>
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* Quantity */}

                                <div className="flex gap-x-3 mt-6 items-center">
                                    <h3 className="text-[14px] font-semibold">
                                        Quantity:
                                    </h3>
                                    <div>
                                        <Quantity />
                                    </div>
                                </div>
                                {/* Add to Cart */}
                                <div className="flex items-center mt-5 gap-x-4">
                                    <Button>Add to cart</Button>
                                    <h2 className="font-bold text-2xl">
                                        ${product.price}
                                    </h2>
                                </div>

                            </div>
                        </div>
                        {/* background Text */}
                        <div className="relative">
                            <div className="bg-white">
                                <div className="bg-clip-text text-transparent bg-gray-200 text-9xl font-extrabold absolute top-0">
                                    Overview
                                </div>
                                <div className="absolute top-10 left-3 font-bold text-2xl">
                                    Product Information
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                ))
            }

        </div>
    )
}