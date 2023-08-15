import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

async function getProducts() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return products;
}

async function getBanner() {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return bannerData;
}

async function Home() {
  const products = await getProducts();
  const bannerData = await getBanner();

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many generation and varieties</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      <div className="w-10 h-10 bg-slate-500">
        
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
}

export default Home;
