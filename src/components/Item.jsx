import React from 'react'
import wishlist from "../assets/icons/card-wishlist.svg"
import security from "../assets/icons/security.svg"
import carts from "../assets/icons/cart.svg"
import cartAdded from "../assets/icons/cartadded.svg"
import like from "../assets/icons/like.png"
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/context'
import { SERVER_PATH } from '../util/const'
const Item = ({ item }) => {

    const navigate = useNavigate();
    const { update, setUpdate, setWishlist, handleCartList } = useUserContext();

    const moveEditor = ({ id, status, img }) => {
        navigate(`/editor/${status}-${id}`, { img });
    }

    const handleLike = (item) => {
        fetch(`${SERVER_PATH}/${item.status}/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                like: !item.like,
                status: item.status,
                img: item.img,
                label: item.label,
                new: item.new,
                cart: item.cart,
                price: item.price,
            })
        })
            .then(res => res.json())
            .then(res => {
                setUpdate(!update);
                console.log(res);
                res.like ?
                    setWishlist(e => [...e, res])
                    : setWishlist(e => e.filter(a => (a.status + a.id) !== (res.status + res.id)))
            })
    }

    return (
        <div className="item-card bg-gray-200 rounded-tr-3xl rounded-tl-3xl">
            <div className="card-header bg-gray-500 p-2 flex relative items-center justify-center rounded-3xl">
                {
                    item.new ?
                        <span className='bg-white absolute top-2 left-2 px-3 rounded-lg leading-relaxed'>New</span> :
                        <></>
                }
                <img src={item.img} alt="" onClick={() => moveEditor(item)} />
            </div>
            <div className="card-footer p-3 font-semibold">
                <div className="px-3 flex py-2 items-center justify-between border-b border-slate-400">
                    <div className="flex items-center ">
                        <img src={security} alt="" className='me-2' />
                        {item.label}
                    </div>
                    <div className="price">
                        <span className='me-1 text-red-500'>{item.price}</span>
                        сум
                    </div>
                </div>
                <div className="flex justify-between items-center py-1 mt-2">
                    <div className="flex gap-4 ">
                        <button onClick={() => handleLike(item)} className='like-btn'>
                            <img src={item.like ? like : wishlist} alt="" className="w-[30px]" />
                        </button>
                        <button onClick={() => handleCartList(item)} className="like-btn"><img src={item.cart ? cartAdded : carts} alt="" /></button>
                    </div>
                    <button className='border border-slate-950 bg-blue hover:bg-opacity-70 transition-all px-3 py-1 rounded-3xl'>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default Item