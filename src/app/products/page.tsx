import ProductCart from "@/components/layout/ProductCart"
import {Product} from '@/utils/type'
import {client} from '@/../sanity/lib/client'


const getProductData = () => {
  const res = client.fetch(`*[_type=='product']{
    name,
    id,
    category,
    image,
    price,
    tagline,
  }`)
  return res
}


const AllProducts = async () => {
  // const data:Product[] = []
  // data.push(await getProductData())
  const data:Product[] = await getProductData()
  console.log(data)

  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
    {data.map((list) => (
      <ProductCart price={list.price} 
      title={list.name} 
      key={list.id}
      img={list.image as string}
      category={list.category}
      id={list.id} />
    ))}
    </div>
  )
}

export default AllProducts