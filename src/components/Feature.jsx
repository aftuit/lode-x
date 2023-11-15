import React from 'react'

const Feature = ({ add }) => {
    return (
        <div className="content mt-12">
            <div
                className=" w-[150px] h-[150px] rounded-full mx-auto flex justify-center items-center"
                style={{
                    border: '1px solid #33CAFF',
                    boxShadow: '0px 4px 4px 0px #00000040'
                }}>

                <img src={add.img} alt={add.label} />
            </div>
            <div className="mt-3 text-center text-2xl font-bold">
                {add.label}
            </div>
            <div className="text-center text-sm text-slate-500 mt-3">
                {add.text}
            </div>
        </div>
    )
}

export default Feature