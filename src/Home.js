import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {


  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="home">
      <div className="home_container" >
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product
            id="123213"
            title={truncateString("Sorel Women's Explorer II Joan Cozy Boot", 50)}
            price={164.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/61gXrjjyfNS._AC_UY395_.jpg"
          />
         
        <Product
            id="123213"
            title={truncateString("Samsung Galaxy Note 20 Ultra 128GB Unlocked Android Smartphone - Mystic Black (Renewed)", 50)}
            price={374.74}
            rating={5}
            image="https://m.media-amazon.com/images/I/51UG-WVTAOL._AC_SX425_.jpg"
          />
         
          <Product
            id="49538094"
            title={truncateString('Iron Flame (The Empyrean, 2) Hardcover – November 7, 2023 by Rebecca Yarros (Author)', 50)}
            price={14.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/91ke43dIxkL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="12321341"
            title={truncateString("Amazon Fire TV 50 inch Omni Series 4K UHD smart TV, hands-free with Alexa", 50)}
            price={149.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51puug1pU3L._AC_SL1000_.jpg"
          />
          <Product 
            id="23445930"
            title={truncateString("Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric", 50)}
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product 
            id="3254354345"
            title={truncateString("New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)", 50)}
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title={truncateString("Deco Gear 49 Curved Ultrawide E-LED Gaming Monitor, 32:9 Aspect Ratio, Immersive 3840x1080 Resolution, 144Hz Refresh Rate, 3000:1 Contrast Ratio (DGVIEW490)", 50)}
            price={699.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71LDbprgVEL._AC_SY450_.jpg"
          />
        </div>
        <div className="home__row" >
        <Product 
            id="4903850"
            title={truncateString("Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor", 50)}
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product  
          id="90653980"
          title={truncateString("Rolex Pre-Loved Blue Stainless Steel & Platinum Yacht-Master II 116680 44mm, Silver", 50)}
          price={22500}
          rating={4}
          image="https://m.media-amazon.com/images/I/71pXUF1VAkL._AC_UL500_.jpg"
          />
          <Product 
          id="09395857"
          title={truncateString("Mongoose Kong Fat Tire Mountain Bike for Kids, 20-Inch Wheels, Blue", 50)}
          price={261.60}
          rating={4}
          image="https://m.media-amazon.com/images/I/81IgXFWzf2L._AC_SX425_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;



//		

//

//