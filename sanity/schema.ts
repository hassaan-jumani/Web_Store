import { type SchemaTypeDefinition } from 'sanity'

const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
      {
          name: 'name',
          type: 'string',
          title: 'Product Name',
      },
      {
          name: 'price',
          type: 'number',
          title: 'Product Price',
      },
      {
          name: 'tagline',
          type: 'string',
          title: 'Product Tagline',
      },
      {
          name: 'category',
          type: 'string',
          title: 'Product Category',
      },
      {
          name: 'image',
          type: 'image',
          title: 'Product Image',
      },
      {
          name: 'id',
          type: 'number',
          title: 'Product ID',
      },
      
  ]
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
