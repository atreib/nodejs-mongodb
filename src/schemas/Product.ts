import { Schema, model } from 'mongoose';

const Product = new Schema(
  {
    label: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { strict: false },
);

const ProductModel = model('Product', Product);

export { Product, ProductModel };
