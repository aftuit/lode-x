import React from 'react'
import search from "../assets/icons/search.svg"
export const Search = () => {
    return (
        <div className='px-16 bg-black'>
            <form className='mx-auto container justify-center flex gap-2 w-full'>
                <img src={search} alt="" />
                <input
                    type="text"
                    placeholder='Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... Поиск продукта, бренда или продавца... '
                    className='ms-6 px-2 py-3 w-3/4 bg-transparent outline-none text-opacity-70 placeholder:text-slate-600 text-white'
                />
            </form>
        </div>
    )
}
