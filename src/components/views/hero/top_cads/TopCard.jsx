import React from "react";

const TopCard = () => {
  const topProduct = [
    {
      id: 1,
      title: "Bluetooth Calling Smartwatch starts at...",
      //from picsum.photos
      image: "../carousel_images/img1.jpg",
    },
    {
      id: 2,
      title: "Get Brand New Clothes | Upto 50 % off",
      image: "../carousel_images/img2.jpg",
    },
    {
      id: 3,
      title: "Electronics devices for home office",
      image: "../carousel_images/img3.jpg",
    },
    {
      id: 4,
      title: "Upgrade your home | RoyalMart Brands & more",
      image: "../carousel_images/img4.jpg",
    },
  ];
  return (
    <>
      {topProduct.map((item) => {
        return (
          <div className="top-card" key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopCard;
