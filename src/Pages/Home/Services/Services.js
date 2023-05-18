import React from "react";
import image from "../../../assets/images/servicebanner.png";
import {
  FaShippingFast,
  FaPhoneAlt,
  FaUserSecret,
  FaTags,
} from "react-icons/fa";
const Services = () => {
  //const imageURL = "../../../assets/images/servicebanner.png";
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat text-center h-60"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-wrap gap-4 items-center justify-around justify-items-center absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden hero-overlay bg-opacity-30">
          <div className="flex items-center justify-between text-white">
            <span className=" ">
              <FaShippingFast className="text-2xl md:text-5xl mr-3"></FaShippingFast>
            </span>
            <div>
              <h4 className="md:text-2xl font-bold">Free Shipping</h4>
              <p className="">For orders from $50</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-white">
            <span className=" ">
              <FaPhoneAlt className="text-2xl md:text-5xl mr-3"></FaPhoneAlt>
            </span>
            <div>
              <h4 className="md:text-2xl font-bold">Support 24/7</h4>
              <p className="">Call us anytime</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-white">
            <span className=" ">
              <FaUserSecret className="text-2xl md:text-5xl mr-3"></FaUserSecret>
            </span>
            <div>
              <h4 className="md:text-2xl font-bold">100% safety</h4>
              <p className="">Only secure payments</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-white">
            <span className=" ">
              <FaTags className="text-2xl md:text-5xl mr-3"></FaTags>
            </span>
            <div>
              <h4 className="md:text-2xl font-bold">Hot offers</h4>
              <p className="">Discount upto 90%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
