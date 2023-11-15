import React from 'react';
import del from "../assets/icons/delete.svg";
import { useUserContext } from '../context/context';
import { formatCurrency, getStatus } from "../util/const"
export const Cart = () => {

    const { cartOpen, setCartOpen, cartlist, handleCartList } = useUserContext();


    return (
        <div className={`fixed z-20 top-0 bottom-0 w-96 transition-all bg-white ${cartOpen ? 'right-0' : '-right-full'}`}>
            {
                cartOpen ?
                    <div className="box-blur z-10 fixed top-0 right-0 left-0 bottom-0 backdrop-blur-md"></div> :
                    <></>
            }

            <div className='relative h-screen z-20 p-5 bg-white'>
                <div className="flex justify-between items-center py-3">
                    <h3 className='text-2xl font-semibold'>Cart</h3>
                    <button
                        className='close text-3xl px-3 flex items-center justify-center'
                        onClick={() => setCartOpen(false)}>
                        &times;
                    </button>
                </div>
                {
                    cartlist.length ?
                        <div className="items mt-5 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
                            {
                                cartlist.map(cart => <div className='flex justify-between items-center px-2'>
                                    <div className='flex items-center gap-3'>
                                        <img src={cart.img} alt="" className='w-24 h-24' />
                                        <div>
                                            <h4 className='text-xl font-semibold'>{cart.label}</h4>
                                            <p>{getStatus(cart.status)}</p>
                                            <span className='text-red-500'>{cart.price} сум</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">

                                        <button
                                            onClick={() => handleCartList(cart)}
                                            className='text-3xl font-semibold  w-[35px] h-[35px] border border-slate-400 rounded flex items-center justify-center'>
                                            <img src={del} alt="close" />
                                        </button>
                                    </div>
                                </div>)
                            }

                        </div>:
                        <h3 className='text-2xl text-center text-slate-500 mt-12'>Cart empty</h3>
                }


                <div className='total-price absolute bg-slate-200 border py-5 px-4 bottom-0 right-0 left-0'>
                    <h3 className='text-end font-medium'>Total price: <span className='font-bold'>
                        {
                            formatCurrency(cartlist.reduce(
                                (accumulator, currentValue) => (+accumulator) + (+currentValue.price), 0))
                        }
                        сум</span></h3>
                </div>
            </div>

        </div>
    )
}

