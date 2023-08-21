import ProductCart from "@/components/layout/ProductCart"
import { Product } from '@/utils/type'
import { client } from '@/../sanity/lib/client'

const getProductsCategory = (category:string) => {
    const res = client.fetch(`*[_type=='product' && category == "${category}"]`)
    return res
}
// async function getProductsCategory(category:string) {
//     const res = await client.fetch(`*[_type=='product' && category == "${category}"]`)
//     return res
// }

// export async function getProductsCategory({ params }: { params: { category: string } }) {
//     const res = await client.fetch(`*[_type=='product' && category == "${params.category}"]`)
//     return res
// }


export default async function Page({ params }: { params: { slug: string } }) {

    const data: Product[] = await getProductsCategory(params.slug)
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