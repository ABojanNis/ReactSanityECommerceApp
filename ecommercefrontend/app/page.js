import React from 'react';

import { client } from "@/lib/client";
import { Product, FooterBanner, HeroBanner } from "@/components";

const Home = async () => {
  const {products, bannerData} = await getBannerData();

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner />
    </div>
  );
};

async function getBannerData() {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {products, bannerData};
}

export default Home;
