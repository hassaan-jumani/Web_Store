import ProductCart from "@/components/layout/ProductCart"
import { StaticImageData } from "next/image"
import { Product } from '@/utils/type'
import { client } from '@/../sanity/lib/client'

export const getProductsCategory = async (category:string) => {
    const res = await client.fetch(`*[_type=='product' && category == "${category}"]`)
    return res
}

// const getProductsCategory = (category:string) => {
//     return products.filter((product) => product.category === category)
// }

export default async function Page({ params }: { params: { slug: string } }) {

    const data: Product[] = await getProductsCategory(params.slug)
    // const result = getProductsCategory(params.slug)
    return (
        <div className="flex justify-evenly mt-16 py-10 flex-wrap">
            {data.length > 0 ? data.map((list) => (
                <ProductCart price={list.price}
                    title={list.name}
                    key={list.id}
                    img={list.image as string}
                    category={list.category}
                    id={list.id} />
            )) : <h1> Sorry No Products Found</h1>}
        </div>
    )
}