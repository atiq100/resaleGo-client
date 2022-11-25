import React from "react";

const SellCard = ({ post }) => {
  const {
    productName,
    seller_name,
    condition,
    description,
    lastModified,
    location,
    number,
    originalPrice,
    resalePrice,
    yearsOfUse,
  } = post;
  console.log(post);
  return (
    <div>
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand: {productName}</h2>
          <div className="text-lg font-semibold">
            <p>
              Original Price:{" "}
              <span className="text-secondary text-md font-normal">
                {originalPrice}
              </span>
            </p>
            <p>
              Resale Price:{" "}
              <span className="text-secondary text-md font-normal">
                {resalePrice}
              </span>
            </p>
            <p>
              Condition:{" "}
              <span className="text-secondary text-md font-normal">
                {condition}
              </span>
            </p>
            <p>
              Years Of Use:{" "}
              <span className="text-secondary text-md font-normal">
                {yearsOfUse}
              </span>
            </p>
            <p>
              Description:{" "}
              <span className="text-secondary text-md font-normal">
                {description}
              </span>
            </p>
            <p>
              Location:{" "}
              <span className="text-secondary text-md font-normal">
                {location}
              </span>
            </p>
            <p>
              Seller Name:{" "}
              <span className="text-secondary text-md font-normal">
                {seller_name}
              </span>
            </p>
            <p>
              Phone Number:{" "}
              <span className="text-secondary text-md font-normal">
                {number}
              </span>
            </p>
            <p>
              Posted Date:{" "}
              <span className="text-secondary text-md font-normal">
                {lastModified.slice(0, 15)}
              </span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCard;
