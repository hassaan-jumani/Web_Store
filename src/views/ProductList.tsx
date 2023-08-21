import ProductCart from "@/components/layout/ProductCart"
import { products } from "@/utils/mock"
import { Product } from '@/utils/type'
import { client } from '@/../sanity/lib/client'

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product'][0...3]`)
  return res
}

const ProductList = async () => {

  const data: Product[] = await getProductData()
  const product_collection = data.slice(0, 3);
  return (
    <div>

      <h3 className="mt-10 text-center font-extrabold text-sm text-blue-700">
        PRODUCTS
      </h3>
      <h3 className="mt-2 text-center font-extrabold text-3xl py-5">
        Check What We Have
      </h3>
      <div className="flex justify-evenly">
        {product_collection.map((list) => (
          <ProductCart price={list.price} title={list.name} key={list.id} category={list.category} img={list.image} id={list.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductList