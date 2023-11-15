import React from 'react'

const Blog = ({ content }) => {
    return (
        <div className="content grid grid-cols-3 items-center">
            <div className=''>
                <img src={content.img} alt={content.label} className="w-[160px] h-[155px]" />
            </div>
            <div className="info col-span-2 text-xl">
                {content.text}
            </div>
        </div>
    )
}

export default Blog