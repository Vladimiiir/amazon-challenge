import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684221_.jpg"
        />
        <div className="home__row">
          <Product
            id="12332341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful
            Businesses Paperback"
            price={11.96}
            image={"/pictures/the-lean-startup.jpg"}
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with L-ebeater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image={"/pictures/KenwoodMix.jpeg"}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image={"/pictures/Samsung.jpeg"}
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, CHarcoal Fabric"
            price={98.99}
            image={"/pictures/Alexa.jpg"}
            rating={3}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={589.99}
            image={"/pictures/iPad.avif"}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED GAming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image={"/pictures/Samsung.jpeg"}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
