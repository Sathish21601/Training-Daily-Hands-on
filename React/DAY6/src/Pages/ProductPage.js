import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  let { id } = useParams();

  console.log(id);
  const apiUrl =
    `https://fakestoreapi.com/products/${id}`;

  let [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(apiUrl).then((response) =>
      response
        .json()
        .then((actualData) => setProduct(actualData))
        .catch((err) => {
          console.log(err.message);
        })
    );
  }, [apiUrl]);

  console.log(product);

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <img
        className="h-[50%] w-[20%] pt-20 ml-[10%] mr-[10%] flex-none bg-cover cursor-pointer rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        src={product.image}
        alt=""
      />
      <div className="pt-20 border-r border-b border-l border-gray-400 cursor-pointer lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="text-black-500 font-sherif text-4xl mb-10">
          {product.title}
        </div>
        <div className="mb-8">
          <p class="text-black-700 font-sherif capitalize from-stone-200 cursor-pointer">{product.description}</p>
          <p className="inline-block bg-blue-400 text-black font-serif cursor-pointer text-md p-2 items-center mb-5 capitalize from-stone-200 mt-5 mr-9rem">
            {product.category}
          </p>
        </div>
        <div className="flex justify-between px-6 pt-4 pb-2">
          <span className="px-3 py-3 text-sm font-semibold text-black-700 mr-2 mb-2 cursor-pointer">
            ${product.price}
          </span>
          {/*<span className="px-3 py-3 text-sm font-semibold text-black-700 mr-2 mb-2">
          Rating: ${product.rating.rate}
          </span> */}
          <span className="inline-block bg-blue-600 text-white font-sherif cursor-pointer px-3 py-3 text-sm font-semibold mr-2 mb-2 ">
            Add To Cart
          </span>
        </div>
      </div>
    </div>
  );
}
