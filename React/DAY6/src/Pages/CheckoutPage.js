import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext';
import {useNavigate} from 'react-router-dom'

export default function CheckoutPage(CartDisplay) {
  let contextData = useContext(AppContext);

  const navigate = useNavigate();

  const forward = () => {
    navigate(1);
  }

  const backward = () => {
    navigate(-1);
  }

  let cartItems = contextData.cartState.Product.map(item => 
    <CartDisplay 
        key={item.product.id}
        id={item.product.id}
        name={item.product.name} 
        price={item.product.price}
        rating = {item.product.rating.rate}
        img={item.product.img}
        quantity={item.quantity}
    />
  )

  return (
    <div className='z-10 fixed w-full h-full pt-20'>
      <div className='absolute w-1/4 md:w-3/4 inset-0 bg-gray-700 bg-opacity-50 z-20'>
      </div>
      <div className='absolute inset-y-0 right-0 w-3/4 md:w-1/4 bg-white z-10'>
      <div className='flex justify-between h-16 bg-gray-200 bg-opacity-90'>
            <p className='text-3xl mx-4 my-3 text-gray-700 font-display'>Cart <span className='text-lg'>( items)</span></p>
              <svg onClick={backward}
                className="m-4 h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900" 
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>
    {contextData.Product === 0 &&
    <div className='h-full'>
      <div className='font-body flex flex-col justify-center items-center my-auto w-full h-3/4 md:h-full'>
        <p>Your cart is empty!</p>
          <button onClick={backward}
            className='h-12 my-2 w-[50%] text-sm bg-blue-700 text-white rounded transition 
            duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'
          >
          Shop Now  
          </button>
    </div>
    </div>
    }
    {contextData.Product !== 0 &&
            <div>
              <div className='flex-col divide-y-2 p-2 font-body text-gray-700'>
                <div className='flex-col flex-shrink h-3/6 overflow-auto'>


                <div>
      <div className='z-10 fixed w-full h-full'>
        <div className='absolute w-1/4 md:w-3/4 inset-0 bg-gray-700 bg-opacity-50 z-20'>
        </div>
        <div className='absolute inset-y-0 right-0 w-3/4 md:w-1/4 bg-white z-10'>
          <div className='flex justify-between h-16 bg-gray-200 bg-opacity-90'>
            <p className='text-3xl mx-4 my-3 text-gray-700 font-display'>Cart <span className='text-lg'>({contextData.cartState.Product.length} items)</span></p>
              <svg 
                className="m-4 h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900" 
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </div>

          <div className='h-full'>
            {contextData.Product === 0 &&   
              <div className='font-body flex flex-col justify-center items-center my-auto w-full h-3/4 md:h-full'>
                <p>Your cart is empty!</p>
                  <button onClick={backward}
                    className='h-12 p-4 my-4 w-full text-sm bg-gray-900 text-white rounded transition 
                    duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'
                  >
                  Shop Now  
                  </button>
            </div> }

            {contextData.Product !== 0 &&
            <div>
              <div className='flex-col divide-y-2 p-2 font-body text-gray-700'>
                <div className='flex-col flex-shrink h-3/6 overflow-auto'>
                  
                </div>
                <div className='flex p-4 justify-between'>
                  <p className=''>Subtotal</p>
                  <p className='font-semibold'>${contextData.Total}</p>
                </div>
              </div>
              <div className='text-center'> 
                <button   
                className='h-12 p-4 w-2/4 text-sm bg-gray-900 text-white rounded transition 
                  duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'>
                    Checkout
                </button>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>



                </div>
                <div className='flex p-4 justify-between'>
                  <p className=''>Subtotal</p>
                  <p className='font-semibold'>${contextData.cartState.Total} </p>
                </div>
              </div>
              <div className='text-center'> 
                <button   
                className='h-12 p-4 w-2/4 text-sm bg-gray-900 text-white rounded transition 
                  duration-300 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:border'>
                    Checkout
                </button>
              </div>
            </div>
            }
    </div>
    </div>
)
  }
