import { Link } from "react-router-dom";
import { FaBuysellads, FaHandHoldingUsd, FaShoppingCart } from "react-icons/fa";

export const Header = () => {
    return (
      <div className="mb-16">
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Buy &</span>
                </span>{' '}
                Sell, Your Bike For Countless Benifits
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                It is a resell Market.Here you can sell your used bike and also buy from this website.
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center  btn btn-primary"
              >
                Buy Now
              </button>
              <Link
                href="/"
                aria-label=""
                className="inline-flex items-center ml-2 font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-accent-700"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <FaShoppingCart></FaShoppingCart>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Buy Used Bike
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
               <FaHandHoldingUsd></FaHandHoldingUsd>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
               Sell Used Bike
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <FaBuysellads></FaBuysellads>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Advertisment
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };