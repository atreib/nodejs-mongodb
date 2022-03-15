import { Schema, model } from 'mongoose';

interface IProduct {
  label: string;
  price: number;
}

const Product = new Schema<IProduct>(
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

const ProductModel = model<IProduct>('Product', Product);

export { Product, ProductModel, IProduct };
