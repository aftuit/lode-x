import React from 'react'
import starGold from "../assets/icons/star-gold.svg"
import star from "../assets/icons/star.svg"

const Designer = ({ user }) => {
    return (
        <div className="content mt-12">
            <div className="img-wrap bg-slate-200 rounded-full w-fit mx-auto flex justify-center items-center">
                <img src={user.avatar} alt={user.name} />
            </div>
            <div className="mt-3 text-center text-xl font-semibold">
                {user.fullname}
            </div>
            <div className="stars flex justify-center gap-3 mt-3">
                {
                    [1, 2, 3, 4, 5].map((num) => <img key={num} src={(num <= user.rating) ? starGold: star} alt="" /> )
                }

            </div>
        </div>
    )
}

export default Designer