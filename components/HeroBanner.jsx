import Link from "next/link";
import React from "react";

const HeroBanner = ({ banner }) => {
  return (
    <div className="hero-banner-container">
      {console.log(banner)}
      {banner.map((item, i) => (
        <div key={i}>
          <p className="beats-solo">{item.smallText}</p>
          <h3>{item.midText}</h3>
          <img
            src={item.image}
            alt="headphones"
            className="hero-banner-image"
          />
          <div>
            <Link href="/product/ID">
              <button type="button">{item.buttonText}</button>
            </Link>
            <div className="desc">
              <h5>{item.description}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
