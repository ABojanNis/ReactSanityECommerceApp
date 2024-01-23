import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { client, urlFor } from "@/lib/client";
import { notFound } from "next/navigation";
import { Product, ProductButtons, ProductImages, ProductQuantity } from "@/components";

const ProductDetails = async ({ params: { slug } }) => {
  const currentProductQuery = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const allProductsQuery ="*[_type == 'product']";

  const product = await client.fetch(currentProductQuery);
  const products = await client.fetch(allProductsQuery);

  if (!product) notFound();

  const { image, name, details, price } = product;

  const images = image.map((image) => ([urlFor(image).url()]));

  return (
    <div>
      <div className="product-detail-container">
        <ProductImages images={images} />
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <ProductQuantity />
          <ProductButtons product={product} />
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug.current
  }))
}

export default ProductDetails;
