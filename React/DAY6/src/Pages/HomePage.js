import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const apiUrl = `https://fakestoreapi.com/products`;

  let [products, setProducts] = useState([]);

 

  useEffect(() => {
    fetch(apiUrl).then((response) =>
      response
        .json()
        .then((actualData) => setProducts(actualData))
        .catch((err) => {
          console.log(err.message);
        })
    );
  }, [apiUrl]);

  console.log(products);

  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="pt-20 grid grid-cols-3 gap-10 p-[2%]">
      {products.map((product, idx) => {
        return (
          <div
            key={idx}
            className="max-w-md rounded-md overflow-hidden shadow-lg h-100 mb-[5%] cursor-pointer"
            onClick={() => {
              handleNavigation(product.id);
            }}
          >
            <img
              className="w-[60%] h-[60%] ml-[25%]"
              src={product.image}
              alt=""
            />
            <div className="px-6 py-4">
              <div className="font-light-200 font-sherif text-xl mb-2 overflow-hidden truncate w-300 ">
                {product.title}
              </div>
            </div>
            <div className="flex justify-between px-6 pt-4 pb-2">
              <span className="px-3 py-3 text-sm font-semibold text-black-700 mr-2 mb-2">
                ${product.price}
              </span>
              {/* <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-3 text-sm font-semibold mr-2 mb-2 ">
                Add To Cart
                  </span> */}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// <div className='w-[70%] h-100 ml-[15%] mb-5 rounded-md color-white cursor-pointer' onClick={() => {
//     handleNavigation(product.id)
//   }}>
//     <div>
//     <img className='w-100 h-100' src={product.image} alt='productimage'></img>
//     </div>
//     <h2>{product.title}</h2>
//     <h2>{product.price}</h2>
// </div>
