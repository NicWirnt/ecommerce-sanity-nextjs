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
  const banner = await getBanner();

  return (
    <>
      <HeroBanner banner={banner} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      <div className="w-10 h-10 bg-slate-500">
        <button onClick={console.log("HI")}>HI</button>
      </div>

      <FooterBanner />
    </>
  );
}

export default Home;
